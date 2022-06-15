import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginSuccessful, logout } from "store/reducers/authSlice";
import { localStorageKeys } from "constants/localStorageKeys";
import routes from "constants/routes";
import AuthService from "services/authService";
import axios from "axios";

const useSession = () => {
  const user = useSelector((state) => state.auth.user);
  const [errors, setErrors] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [interceptor, setInterceptor] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    try {
      const { data, headers } = await AuthService.logIn(values);

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
  };

  const handleLogout = async () => {
    try {
      await AuthService.logOut(user);

      axios.interceptors.request.eject(interceptor);

      localStorage.removeItem(localStorageKeys.auth);
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async (values) => {
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
  };

  useEffect(() => {
    const authRawData = localStorage.getItem(localStorageKeys.auth);
    if (authRawData) {
      const { data, headers } = JSON.parse(authRawData);

      axios.interceptors.request.use((config) => {
        config.headers = { ...config.headers, ...headers };
        return config;
      });

      setIsLoggedIn(true);
      if (!Object.values(user).length) {
        dispatch(loginSuccessful(data));
      }
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [isLoggedIn]);

  return { user, errors, isLoggedIn, handleLogin, handleLogout, handleSignUp };
};

export default useSession;
