import React from "react";
import { Navigate } from "react-router-dom";

import routes from "constants/routes";
import useSession from "hooks/useSession";

const PrivateRoute = ({ page }) => {
  const { isLoggedIn } = useSession();

  if (!isLoggedIn) {
    return <Navigate to={routes.signIn} />;
  }
  return page;
};

export default PrivateRoute;
