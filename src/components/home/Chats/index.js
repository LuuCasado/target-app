import React, { useState } from "react";

import useStyles from "./styles";

const messagesMocked = [
  {
    match_id: 1,
    topic_icon: "/topic/icon/1/eb7bf9f2-62be-451c-af5b-5b41150eef1c.jpg",
    last_message: "Hi!",
    unread_messages: 2,
    user: {
      id: 1,
      full_name: "Jon Doe",
      avatar: {
        original_url: "/topic/icon/1/eb7bf9f2-62be-451c-af5b-5b41150eef1c.jpg",
        normal_url: "/topic/icon/1/eb7bf9f2-62be-451c-af5b-5b41150eef1c.jpg",
        small_thumb_url:
          "/topic/icon/1/eb7bf9f2-62be-451c-af5b-5b41150eef1c.jpg",
      },
    },
  },
  {
    match_id: 1,
    topic_icon: "/topic/icon/1/eb7bf9f2-62be-451c-af5b-5b41150eef1c.jpg",
    last_message: "Hola!",
    unread_messages: 2,
    user: {
      id: 1,
      full_name: "Connie Isla",
      avatar: {
        original_url: "/topic/icon/1/eb7bf9f2-62be-451c-af5b-5b41150eef1c.jpg",
        normal_url: "/topic/icon/1/eb7bf9f2-62be-451c-af5b-5b41150eef1c.jpg",
        small_thumb_url:
          "/topic/icon/1/eb7bf9f2-62be-451c-af5b-5b41150eef1c.jpg",
      },
    },
  },
  {
    match_id: 1,
    topic_icon: "/topic/icon/1/eb7bf9f2-62be-451c-af5b-5b41150eef1c.jpg",
    last_message: "Hey!",
    unread_messages: 2,
    user: {
      id: 1,
      full_name: "Meryl Streep",
      avatar: {
        original_url: "/topic/icon/1/eb7bf9f2-62be-451c-af5b-5b41150eef1c.jpg",
        normal_url: "/topic/icon/1/eb7bf9f2-62be-451c-af5b-5b41150eef1c.jpg",
        small_thumb_url:
          "/topic/icon/1/eb7bf9f2-62be-451c-af5b-5b41150eef1c.jpg",
      },
    },
  },
];

const lastMessages = messagesMocked.map(({ last_message }) => last_message);
const topicIcon = messagesMocked.map(({ topic_icon }) => topic_icon);
const userName = messagesMocked.map(({ user: { full_name } }) => full_name);
const userAvatar = messagesMocked.map(
  ({
    user: {
      avatar: { small_thumb_url },
    },
  }) => small_thumb_url
);

const Chats = () => {
  const classes = useStyles();
  const [hasMessages, setHasMessages] = useState(true);

  console.log();
  return hasMessages ? (
    <div className={classes.chatsContainer}>
      <h3>Chats</h3>
      <hr />
      <div className={classes.messagesContainer}>
        <img src={userAvatar[0]} className={classes.userAvatar} />
        <div>
          <p className={classes.userName}>{userName[0]}</p>
          <p className={classes.lastMessage}>{lastMessages[0]}</p>
        </div>
        <img src={topicIcon[0]} className={classes.topic} />
      </div>
      <hr />
      <div className={classes.messagesContainer}>
        <img src={userAvatar[1]} className={classes.userAvatar} />
        <div>
          <p className={classes.userName}>{userName[1]}</p>
          <p className={classes.lastMessage}>{lastMessages[1]}</p>
        </div>
        <img src={topicIcon[1]} className={classes.topic} />
      </div>
      <hr />
      <div className={classes.messagesContainer}>
        <img src={userAvatar[2]} className={classes.userAvatar} />
        <div>
          <p className={classes.userName}>{userName[2]}</p>
          <p className={classes.lastMessage}>{lastMessages[2]}</p>
        </div>
        <img src={topicIcon[2]} className={classes.topic} />
      </div>
      <hr />
    </div>
  ) : (
    <div className={classes.emptyContainer}>
      <h3>There not matches for your targets yet.</h3>
    </div>
  );
};

export default Chats;
