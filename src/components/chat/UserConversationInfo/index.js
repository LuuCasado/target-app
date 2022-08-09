import React from "react";

import useStyles from "./styles";

const UserConversationInfo = ({
  user: {
    topic_icon,
    user: { full_name },
  },
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src={topic_icon} className={classes.topic} alt="topic icon" />
      <p className={classes.userName}>{full_name}</p>
      <p className={classes.title}>Target title</p>
    </div>
  );
};

export default UserConversationInfo;
