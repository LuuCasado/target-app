import React from "react";
import cn from "classnames";

import { ReactComponent as MenuIcon } from "assets/icons/menu-icon.svg";
import useStyles from "./styles";

const Header = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={cn(classes.header, className)}>
      <MenuIcon className={classes.menuIcon} />
    </div>
  );
};

export default Header;
