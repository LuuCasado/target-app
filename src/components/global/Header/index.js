import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cn from "classnames";

import { ReactComponent as HamburgerIcon } from "assets/icons/menu-icon.svg";
import { ReactComponent as CrossIcon } from "assets/icons/close.svg";
import { ReactComponent as ReturnIcon } from "assets/icons/return-icon.svg";
import { ReactComponent as LocationIcon } from "assets/icons/location.svg";
import routes from "constants/routes";
import useStyles from "./styles";

const routeNames = {
  [routes.chat]: "CHAT",
  [routes.createTarget]: "CREATE TARGET",
  [routes.editProfile]: "EDIT PROFILE",
  [routes.editTarget]: "EDIT TARGET",
  [routes.about]: "ABOUT",
};

const Header = ({
  className,
  toggleSider,
  isSiderOpen,
  inRouteHeader,
  toggleMapVisibility,
  isLoggedIn,
}) => {
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
          <LocationIcon
            className={classes.locationIcon}
            onClick={toggleMapVisibility}
          />
        </div>
      ) : (
        <>
          <div className={cn(classes.header, className)}>
            {isSiderOpen ? (
              <CrossIcon className={classes.icon} onClick={toggleSider} />
            ) : (
              <HamburgerIcon className={classes.icon} onClick={toggleSider} />
            )}
          </div>
          {isLoggedIn && (
            <LocationIcon
              className={cn(classes.locationIcon, classes.blackIcon)}
              onClick={toggleMapVisibility}
            />
          )}
        </>
      )}
    </>
  );
};

export default Header;
