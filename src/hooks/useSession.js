import { useSelector, useDispatch } from "react-redux";
import { loginSuccessful, logout } from "../store/reducers/authSlice";

const useSession = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogin = (user) => dispatch(loginSuccessful(user));
  const handleLogout = () => dispatch(logout());

  return { user, handleLogin, handleLogout };
};

export default useSession;
