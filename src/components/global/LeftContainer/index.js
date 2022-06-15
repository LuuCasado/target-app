import React, { useState } from "react";
import cn from "classnames";

import Header from "components/global/Header";
import Footer from "components/global/Footer";
import SiderMenu from "components/global/SiderMenu";
import useSession from "hooks/useSession";
import useStyles from "./styles";

const LeftContainer = ({ children, className, hideFooter }) => {
  const classes = useStyles();
  const { isLoggedIn } = useSession();
  const [isSiderOpen, setIsSiderOpen] = useState(false);

  return (
    <div
      className={cn({
        [classes.common]: !isLoggedIn,
        [classes.authenticated]: isLoggedIn,
      })}
    >
      <Header
        isSiderOpen={isSiderOpen}
        toggleSider={() => setIsSiderOpen(!isSiderOpen)}
      />
      {isSiderOpen ? (
        <SiderMenu isLoggedIn={isLoggedIn} />
      ) : (
        <div className={cn(className)}>{children}</div>
      )}
    </div>
  );
};

export default LeftContainer;
