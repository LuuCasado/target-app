import React from "react";
import cn from "classnames";

import { ReactComponent as HamburgerIcon } from "assets/icons/menu-icon.svg";
import { ReactComponent as CrossIcon } from "assets/icons/close.svg";
import useStyles from "./styles";

const Header = ({ className, toggleSider, isSiderOpen }) => {
  const classes = useStyles();

  return (
    <div className={cn(classes.header, className)}>
      {isSiderOpen ? (
        <CrossIcon className={classes.icon} onClick={toggleSider} />
      ) : (
        <HamburgerIcon className={classes.icon} onClick={toggleSider} />
      )}
    </div>
  );
};

export default Header;
