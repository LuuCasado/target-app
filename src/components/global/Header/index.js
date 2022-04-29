import React from "react";

import menuIcon from "assets/icons/menu-icon.svg";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <img src={menuIcon} className={classes.menuIcon} alt="menuIcon" />
    </div>
  );
};

export default Header;
