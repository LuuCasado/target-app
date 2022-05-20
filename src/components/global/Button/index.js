import React from "react";
import cn from "classnames";

import { buttonStyles } from "constants/styleTypes";
import useStyles from "./styles";

const Button = ({ className, styleType = buttonStyles.primary, ...props }) => {
  const classes = useStyles();

  return (
    <button
      {...props}
      className={cn(
        {
          [classes.primary]: styleType === buttonStyles.primary,
          [classes.link]: styleType === buttonStyles.link,
        },
        className
      )}
    />
  );
};

export default Button;
