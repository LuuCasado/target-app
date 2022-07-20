import React from "react";

import { ReactComponent as User } from "assets/icons/user.svg";
import useStyles from "./styles";

const Avatar = ({ user }) => {
  const classes = useStyles();

  if (!user.data) return null;

  return (
    <>
      <User className={classes.user} />
      <div className={classes.userName}>{user.data.username}</div>
    </>
  );
};

export default Avatar;
