import React from "react";
import cn from "classnames";

import Header from "components/global/Header";
import useSession from "hooks/useSession";
import useStyles from "./styles";

const LeftContainer = ({ children, className }) => {
  const classes = useStyles();
  const { isLoggedIn } = useSession();

  return (
    <div
      className={cn({
        [classes.common]: !isLoggedIn,
        [classes.authenticated]: isLoggedIn,
      })}
    >
      <Header />
      <div className={cn(className)}>{children}</div>
    </div>
  );
};

export default LeftContainer;
