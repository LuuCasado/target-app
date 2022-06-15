import React from "react";

import { ReactComponent as Smilies } from "assets/icons/smilies.svg";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return <Smilies className={classes.smilies} />;
};

export default Footer;
