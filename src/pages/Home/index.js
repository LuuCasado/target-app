import React, { useEffect } from "react";
import Base from "../../components/global/Base";
import useSession from "../../hooks/useSession";

const Home = () => {
  const { handleLogin, handleLogout, user } = useSession();

  useEffect(() => {
    handleLogin({ name: "lu" });
  }, []);

  return <Base user={user} />;
};

export default Home;
