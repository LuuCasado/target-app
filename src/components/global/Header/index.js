import React from "react";
import cn from "classnames";

import { ReactComponent as MenuIcon } from "assets/icons/menu-icon.svg";
import { ReactComponent as CloseIcon } from "assets/icons/close.svg";
import useStyles from "./styles";

const Header = ({ className, toggleSider, isSiderOpen }) => {
  const classes = useStyles();

  return (
    <div className={cn(classes.header, className)}>
      {isSiderOpen ? (
        <CloseIcon className={classes.icon} onClick={toggleSider} />
      ) : (
        <MenuIcon className={classes.icon} onClick={toggleSider} />
      )}
    </div>
  );
};

export default Header;
