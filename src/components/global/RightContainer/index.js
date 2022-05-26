import React from "react";
import cn from "classnames";

import useSession from "hooks/useSession";
import useStyles from "./styles";

const RightContainer = ({ children, className }) => {
  const classes = useStyles();
  const { isLoggedIn } = useSession();

  return (
    <div
      className={cn(
        {
          [classes.common]: !isLoggedIn,
          [classes.authenticated]: isLoggedIn,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default RightContainer;
