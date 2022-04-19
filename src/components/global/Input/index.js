import React from "react";
import cn from "classnames";
import useStyles from "./styles";

const Input = ({ className, ...props }) => {
  const classes = useStyles();
  return <input {...props} className={cn(classes.input, className)} />;
};

export default Input;
