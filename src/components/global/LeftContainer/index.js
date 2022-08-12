import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { toggleMapVisibility } from "store/reducers/layoutSlice";
import Header from "components/global/Header";
import SiderMenu from "components/global/SiderMenu";
import useSession from "hooks/useSession";
import useStyles from "./styles";

const LeftContainer = ({ children, className, inRouteHeader }) => {
  const classes = useStyles();
  const isMapVisible = useSelector((state) => state.layout.isMapVisible);
  const dispatch = useDispatch();
  const { isLoggedIn } = useSession();
  const [isSiderOpen, setIsSiderOpen] = useState(false);

  return (
    <div
      className={cn({
        [classes.common]: !isLoggedIn,
        [classes.authenticated]: isLoggedIn,
        [classes.hidden]: isMapVisible,
      })}
    >
      <Header
        isSiderOpen={isSiderOpen}
        toggleSider={() => setIsSiderOpen(!isSiderOpen)}
        inRouteHeader={inRouteHeader}
        toggleMapVisibility={() => dispatch(toggleMapVisibility())}
        isLoggedIn={isLoggedIn}
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
