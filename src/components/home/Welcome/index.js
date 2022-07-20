import React from "react";

import { ReactComponent as Smilies } from "assets/icons/smilies.svg";
import Button from "components/global/Button";
import useStyles from "./styles";

const Welcome = ({ onSubmit }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Smilies />
      <h2>Welcome to TARGET</h2>
      <h3>Find people near you & Connect</h3>
      <p>
        Create a target by clicking wherever on the map, specify the ratio and
        and a topic: Travel, Dating, Music, etc.
      </p>
      <p>
        will start a chat whenever you’ve a match. You can always dismiss a
        conversation if you’re not interested.
      </p>
      <Button onClick={onSubmit}>OK; GOT IT!</Button>
    </div>
  );
};

export default Welcome;
