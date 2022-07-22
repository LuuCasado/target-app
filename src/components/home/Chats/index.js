import React from "react";

import { ReactComponent as User } from "assets/icons/user.svg";
import useStyles from "./styles";

const Chats = ({ conversations }) => {
  const classes = useStyles();

  return conversations.length ? (
    <div className={classes.chatsContainer}>
      <h3>Chats</h3>
      <hr />

      {conversations.map(
        ({
          last_message,
          topic_icon,
          user: {
            full_name,
            avatar: { small_thumb_url },
          },
        }) => (
          <>
            <div className={classes.messagesContainer}>
              {small_thumb_url ? (
                <img
                  src={small_thumb_url}
                  className={classes.userAvatar}
                  alt={full_name}
                />
              ) : (
                <User className={classes.defaultAvatar} />
              )}
              <div>
                <p className={classes.userName}>{full_name}</p>
                {last_message ? (
                  <p className={classes.lastMessage}>{last_message}</p>
                ) : (
                  <p className={classes.lastMessage}>
                    You still have no messages in this chat
                  </p>
                )}
              </div>
              <img
                src={topic_icon}
                className={classes.topic}
                alt="topic icon"
              />
            </div>
            <hr />
          </>
        )
      )}
    </div>
  ) : (
    <div className={classes.emptyContainer}>
      <h3>There not matches for your targets yet.</h3>
    </div>
  );
};

export default Chats;
