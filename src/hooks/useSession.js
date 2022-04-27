import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginSuccessful, logout } from "store/reducers/authSlice";
import routes from "constants/routes";
import AuthService from "services/authService";

const useSession = () => {
  const [errors, setErrors] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = Object.keys(user).length || localStorage.getItem("auth");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogin = (user) => dispatch(loginSuccessful(user));
  const handleLogout = () => dispatch(logout());

  const handleSignUp = async (values) => {
    try {
      const { data } = await AuthService.signUp(values);
      localStorage.setItem("auth", JSON.stringify(data));
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
    if (!isLoggedIn) {
      const userData = JSON.parse(localStorage.getItem("auth"));
      dispatch(loginSuccessful(userData));
    }
  }, []);

  return { user, errors, isLoggedIn, handleLogin, handleLogout, handleSignUp };
};

export default useSession;
