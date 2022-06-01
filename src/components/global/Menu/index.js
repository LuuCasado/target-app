import React, { useMemo } from "react";

import { buttonStyles } from "constants/styleTypes";
import { authenticatedMenu, unauthenticatedMenu } from "constants/constants";
import Button from "components/global/Button";
import useStyles from "./styles";

const Menu = ({ isLoggedIn }) => {
  const classes = useStyles();

  const authActions = useMemo(
    () => ({
      [authenticatedMenu.CREATE_TARGET]: () =>
        console.log(authenticatedMenu.CREATE_TARGET),
      [authenticatedMenu.ABOUT]: () => console.error(authenticatedMenu.ABOUT),
    }),
    []
  );

  const unauthActions = useMemo(
    () => ({
      [unauthenticatedMenu.CONTACT]: () =>
        console.log(unauthenticatedMenu.CONTACT),
      [unauthenticatedMenu.ABOUT]: () =>
        console.error(unauthenticatedMenu.ABOUT),
    }),
    []
  );

  return (
    <div className={classes.container}>
      {isLoggedIn
        ? Object.values(authenticatedMenu).map((item) => (
            <Button
              styleType={buttonStyles.menu}
              key={item}
              onClick={authActions[item]}
            >
              {item}
            </Button>
          ))
        : Object.values(unauthenticatedMenu).map((item) => (
            <Button
              styleType={buttonStyles.menu}
              key={item}
              onClick={unauthActions[item]}
            >
              {item}
            </Button>
          ))}
    </div>
  );
};

export default Menu;
