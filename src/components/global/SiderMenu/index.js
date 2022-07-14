import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { buttonStyles } from "constants/styleTypes";
import { authenticatedMenu, unauthenticatedMenu } from "constants/constants";
import routes from "constants/routes";
import Button from "components/global/Button";
import useStyles from "./styles";

const SiderMenu = ({ isLoggedIn }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const authActions = useMemo(
    () => ({
      [authenticatedMenu.CREATE_TARGET]: () => navigate(routes.createTarget),
      [authenticatedMenu.EDIT_PROFILE]: () => navigate(routes.editProfile),
      [authenticatedMenu.ABOUT]: () => navigate(routes.about),
    }),
    [navigate]
  );

  const unauthActions = useMemo(
    () => ({
      [unauthenticatedMenu.CONTACT]: () =>
        console.log(unauthenticatedMenu.CONTACT),
      [authenticatedMenu.ABOUT]: () => navigate(routes.about),
    }),
    []
  );

  return (
    <div className={classes.container}>
      {isLoggedIn
        ? Object.values(authenticatedMenu).map((item) => (
            <Button
              styleType={buttonStyles.secondary}
              key={item}
              onClick={authActions[item]}
            >
              {item}
            </Button>
          ))
        : Object.values(unauthenticatedMenu).map((item) => (
            <Button
              styleType={buttonStyles.secondary}
              key={item}
              onClick={unauthActions[item]}
            >
              {item}
            </Button>
          ))}
    </div>
  );
};

export default SiderMenu;
