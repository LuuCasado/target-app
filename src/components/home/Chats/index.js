import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as User } from "assets/icons/user.svg";
import { buildQueryUrl } from "utils/helpers";
import routes from "constants/routes";
import useStyles from "./styles";

const Chats = ({ conversations }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return conversations.length ? (
    <div className={classes.chatsContainer}>
      <h3>Chats</h3>
      <hr />

      {conversations.map(
        ({
          last_message,
          topic_icon,
          match_id,
          unread_messages,
          user: {
            full_name,
            avatar: { small_thumb_url },
          },
        }) => (
          <>
            <div
              className={classes.messagesContainer}
              onClick={() => navigate(buildQueryUrl(routes.chat, { match_id }))}
            >
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
              <div className={classes.topicContainer}>
                <img src={topic_icon} alt="topic icon" />
                {!!unread_messages && <span>{unread_messages}</span>}
              </div>
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
