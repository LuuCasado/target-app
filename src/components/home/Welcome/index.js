import React from "react";

import { ReactComponent as Smilies } from "assets/icons/smilies.svg";
import Button from "components/global/Button";
import useStyles from "./styles";

const Welcome = ({ onSubmit }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Smilies className={classes.smilies} />
      <h2>
        Welcome to <b>TARGET</b>
      </h2>
      <h3>Find people near you & Connect</h3>
      <div>
        <div></div>
        <p>
          Create a target by clicking wherever on the map, specify the ratio and
          and a topic: Travel, Dating, Music, etc.
        </p>
      </div>
      <div>
        <div></div>
        <p>
          <b>TARGET</b> will start a chat whenever you’ve a match.
          <br /> You can always dismiss a conversation if you’re not interested.
        </p>
      </div>
      <Button onClick={onSubmit} className={classes.button}>
        OK; GOT IT!
      </Button>
    </div>
  );
};

export default Welcome;
