import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { loginSuccessful, logout } from "store/reducers/authSlice";
import { localStorageKeys } from "constants/localStorageKeys";
import ChangeInfoSuccess from "components/modals/ChangeInfoSuccess";
import AuthService from "services/authService";
import routes from "constants/routes";
import useModal from "./useModal";

const useSession = () => {
  const user = useSelector((state) => state.auth.user);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [interceptor, setInterceptor] = useState();
  const [errors, setErrors] = useState([]);
  const { openModal } = useModal();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = useCallback(
    async (values) => {
      try {
        const {
          data: { data },
          headers,
        } = await AuthService.logIn(values);

        const interceptor = axios.interceptors.request.use((config) => {
          config.headers = { ...config.headers, ...headers };
          return config;
        });

        setInterceptor(interceptor);

        localStorage.setItem(
          localStorageKeys.auth,
          JSON.stringify({ data, headers })
        );
        dispatch(loginSuccessful(data));
        navigate(routes.home);
      } catch ({
        response: {
          data: { errors },
        },
      }) {
        setErrors(errors);
      }
    },
    [dispatch, navigate, setInterceptor, setErrors]
  );
  const handleLogout = useCallback(
    async (ignoreBackendLogout = false) => {
      try {
        if (!ignoreBackendLogout) {
          await AuthService.logOut(user);
        }

        axios.interceptors.request.eject(interceptor);

        localStorage.removeItem(localStorageKeys.auth);
        dispatch(logout());
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch, interceptor, user]
  );

  const handleSignUp = useCallback(
    async (values) => {
      try {
        const { data, headers } = await AuthService.signUp(values);

        const interceptor = axios.interceptors.request.use((config) => {
          config.headers = { ...config.headers, ...headers };
          return config;
        });

        setInterceptor(interceptor);

        localStorage.setItem(
          localStorageKeys.auth,
          JSON.stringify({ data, headers })
        );
        dispatch(loginSuccessful(data));
        navigate(routes.home);
      } catch ({
        response: {
          data: {
            errors: { full_messages: fullMessages },
          },
        },
      }) {
        setErrors(fullMessages);
      }
    },
    [dispatch, navigate, setInterceptor, setErrors]
  );

  const handleUpdateInfo = useCallback(
    async ({ email }) => {
      if (!Object.values(user).length) return;
      try {
        const { data } = await AuthService.updateUserInfo({
          email,
          id: user.id,
        });
        handleLogout(true);
        openModal(<ChangeInfoSuccess />);
      } catch ({
        response: {
          data: { errors },
        },
      }) {
        setErrors(errors.email);
      }
    },
    [user, openModal, handleLogout, setErrors]
  );

  const handleChangePassword = useCallback(
    async ({ currentPassword, newPassword, confirmNewPassword }) => {
      try {
        const { data } = await AuthService.changePassword({
          currentPassword,
          newPassword,
          confirmNewPassword,
        });
        handleLogout(true);
        openModal(<ChangeInfoSuccess />);
      } catch ({
        response: {
          data: {
            errors: { full_messages },
          },
        },
      }) {
        setErrors(full_messages);
      }
    },
    [handleLogout, openModal, setErrors]
  );

  useEffect(() => {
    const authRawData = localStorage.getItem(localStorageKeys.auth);
    let interceptor;
    if (authRawData) {
      const { data, headers } = JSON.parse(authRawData);
      interceptor = axios.interceptors.request.use((config) => {
        config.headers = { ...config.headers, ...headers };
        return config;
      });
      setInterceptor(interceptor);
      setIsLoggedIn(true);
      if (!Object.values(user).length) {
        dispatch(loginSuccessful(data));
      }
    } else {
      setIsLoggedIn(false);
    }
    return () => {
      if (interceptor) {
        axios.interceptors.request.eject(interceptor);
      }
    };
  }, [user, dispatch]);

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [isLoggedIn]);

  return {
    user,
    errors,
    isLoggedIn,
    handleLogin,
    handleLogout,
    handleSignUp,
    handleUpdateInfo,
    handleChangePassword,
  };
};

export default useSession;
