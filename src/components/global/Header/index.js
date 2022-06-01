import React from "react";
import cn from "classnames";

import { ReactComponent as MenuIcon } from "assets/icons/menu-icon.svg";
import { ReactComponent as CloseIcon } from "assets/icons/close.svg";
import useStyles from "./styles";

const Header = ({ className, toggleMenu, isMenuOpen }) => {
  const classes = useStyles();

  return (
    <div className={cn(classes.header, className)}>
      {isMenuOpen ? (
        <CloseIcon className={classes.icon} onClick={toggleMenu} />
      ) : (
        <MenuIcon className={classes.icon} onClick={toggleMenu} />
      )}
    </div>
  );
};

export default Header;
