import React, { useEffect } from "react";
import useSession from "hooks/useSession";
import useStyles from "../SignIn/styles.js";

const Home = () => {
  const classes = useStyles();
  const { handleLogin, handleLogout, user } = useSession();

  useEffect(() => {
    handleLogin({ name: "lu" });
  }, []);

  return <div></div>;
};

export default Home;
