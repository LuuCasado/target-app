import React from "react";

import useStyles from "./styles";

const FirstTarget = ({ topics }) => {
  const classes = useStyles();
  const topicSlice = topics.slice(1, 4);

  return (
    <div className={classes.container}>
      <h3>Create your first target by clicking wherever on the map.</h3>
      <p>Psss!, these are the most popular targets:</p>
      <div>
        {topicSlice.map(({ label, icon }) => (
          <div className={classes.topics}>
            <img src={icon} />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstTarget;
