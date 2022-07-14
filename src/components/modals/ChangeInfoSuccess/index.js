import React from "react";

import { ReactComponent as Smilies } from "assets/icons/smilies.svg";
import useStyles from "./styles";

const ChangeInfoSuccess = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Smilies className={classes.icon} />
      <p>User info has been changed successfuly</p>
    </div>
  );
};

export default ChangeInfoSuccess;
