import React, { useState } from "react";
import cn from "classnames";

import Header from "components/global/Header";
import Menu from "components/global/Menu";
import useSession from "hooks/useSession";
import useStyles from "./styles";

const LeftContainer = ({ children, className }) => {
  const classes = useStyles();
  const { isLoggedIn } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={cn({
        [classes.common]: !isLoggedIn,
        [classes.authenticated]: isLoggedIn,
      })}
    >
      <Header
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />
      {isMenuOpen ? (
        <Menu isLoggedIn={isLoggedIn} />
      ) : (
        <div className={cn(className)}>{children}</div>
      )}
    </div>
  );
};

export default LeftContainer;
