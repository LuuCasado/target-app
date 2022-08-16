import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { ReactComponent as User } from "assets/icons/user.svg";
import { toggleMapVisibility } from "store/reducers/layoutSlice";
import useSession from "hooks/useSession";
import useStyles from "./styles";

const RightContainer = ({ children, className }) => {
  const classes = useStyles();
  const isMapVisible = useSelector((state) => state.layout.isMapVisible);
  const dispatch = useDispatch();
  const { isLoggedIn } = useSession();

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [isMapVisible]);

  return (
    <>
      <div
        className={cn(
          {
            [classes.common]: !isLoggedIn,
            [classes.authenticated]: isLoggedIn,
            [classes.hidden]: !isMapVisible,
          },
          className
        )}
      >
        <User
          className={classes.user}
          onClick={() => dispatch(toggleMapVisibility())}
        />
        {children}
      </div>
    </>
  );
};

export default RightContainer;
