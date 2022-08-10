import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { loginSuccessful, logout, setHeaders } from "store/reducers/authSlice";
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
  const [isLoading, setIsLoading] = useState(false);
  const { openModal } = useModal();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = useCallback(
    async (values) => {
      try {
        setIsLoading(true);
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
        dispatch(setHeaders(headers));
        navigate(routes.home);
      } catch ({
        response: {
          data: { errors },
        },
      }) {
        setErrors(errors);
      } finally {
        setIsLoading(false);
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
        setIsLoading(true);
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
        dispatch(setHeaders(headers));
        navigate(routes.home);
      } catch ({
        response: {
          data: {
            errors: { full_messages: fullMessages },
          },
        },
      }) {
        setErrors(fullMessages);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch, navigate, setInterceptor, setErrors]
  );

  const handleUpdateInfo = useCallback(
    async ({ email }) => {
      if (!Object.values(user).length) return;
      try {
        setIsLoading(true);
        await AuthService.updateUserInfo({
          email,
          id: user.id,
        });
        //handleLogout(true);
        openModal(<ChangeInfoSuccess />);
      } catch ({
        response: {
          data: { errors },
        },
      }) {
        setErrors(errors.email);
      } finally {
        setIsLoading(false);
      }
    },
    [user, openModal, handleLogout, setErrors]
  );

  const handleChangePassword = useCallback(
    async ({ currentPassword, newPassword, confirmNewPassword }) => {
      try {
        setIsLoading(true);
        await AuthService.changePassword({
          currentPassword,
          newPassword,
          confirmNewPassword,
        });
        // handleLogout(true);
        openModal(<ChangeInfoSuccess />);
      } catch ({
        response: {
          data: {
            errors: { full_messages },
          },
        },
      }) {
        setErrors(full_messages);
      } finally {
        setIsLoading(false);
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
      const interceptorResponse = axios.interceptors.response.use(
        (response) => response,
        (error) => {
          if (error.response.status === 401) {
            handleLogout(true);
          }
          return Promise.reject(error);
        }
      );

      setIsLoggedIn(true);
      if (!Object.values(user).length) {
        dispatch(loginSuccessful(data));
        dispatch(setHeaders(headers));
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
    isLoading,
    handleLogin,
    handleLogout,
    handleSignUp,
    handleUpdateInfo,
    handleChangePassword,
  };
};

export default useSession;
