import React from "react";

import { ReactComponent as MenuIcon } from "assets/icons/menu-icon.svg";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <MenuIcon className={classes.menuIcon} />
    </div>
  );
};

export default Header;
