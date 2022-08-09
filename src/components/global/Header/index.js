import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cn from "classnames";

import { ReactComponent as HamburgerIcon } from "assets/icons/menu-icon.svg";
import { ReactComponent as CrossIcon } from "assets/icons/close.svg";
import { ReactComponent as ReturnIcon } from "assets/icons/return-icon.svg";
import routes from "constants/routes";
import useStyles from "./styles";

const routeNames = {
  [routes.chat]: "CHAT",
  [routes.createTarget]: "CREATE TARGET",
  [routes.editProfile]: "EDIT PROFILE",
  [routes.editTarget]: "EDIT TARGET",
};

const Header = ({ className, toggleSider, isSiderOpen, inRouteHeader }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      {inRouteHeader ? (
        <div className={cn(classes.header, classes.inRouteHeader)}>
          <ReturnIcon
            className={classes.returnIcon}
            onClick={() => navigate(-1)}
          />
          <h1>{routeNames[pathname]}</h1>
        </div>
      ) : (
        <div className={cn(classes.header, className)}>
          {isSiderOpen ? (
            <CrossIcon className={classes.icon} onClick={toggleSider} />
          ) : (
            <HamburgerIcon className={classes.icon} onClick={toggleSider} />
          )}
        </div>
      )}
    </>
  );
};

export default Header;
