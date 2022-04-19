import React from "react";
import cn from "classnames";
import useStyles from "./styles";

const Button = ({ className, ...props }) => {
  const classes = useStyles();
  return <button {...props} className={cn(classes.button, className)} />;
};

export default Button;
