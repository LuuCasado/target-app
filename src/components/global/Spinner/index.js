import React from "react";
import cn from "classnames";

import useStyles from "./styles";

const Spinner = ({ className, isVisible }) => {
  const classes = useStyles();

  if (!isVisible) return null;

  return <div className={cn(classes.spinner, className)} />;
};

export default Spinner;
