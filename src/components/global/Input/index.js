import React from "react";
import cn from "classnames";

import useStyles from "./styles";

const Input = ({ className, error, ...props }) => {
  const classes = useStyles();
  return (
    <>
      <input {...props} className={cn(classes.input, className)} />
      {error && <p className={classes.error}>{error}</p>}
    </>
  );
};

export default Input;
