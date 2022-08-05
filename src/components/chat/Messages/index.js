import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import useStyles from "./styles";

const Messages = ({ messages, userId, handleGetMessages, hasMore }) => {
  const classes = useStyles();
  const [messageLoaded, setMessageLoaded] = useState(false);
  const messagesRef = useRef();

  const getHoursWithMinutes = (rawDate) => {
    const newDate = new Date(rawDate);
    const minutes = newDate.getMinutes();

    return `${newDate.getHours()}:${minutes < 10 ? "0" : ""}${minutes}`;
  };

  const onScroll = (event) => {
    if (event.target.scrollTop === 0 && hasMore) {
      handleGetMessages();
    }
  };

  useEffect(() => {
    const element = messagesRef.current;

    if (
      element &&
      messages.length &&
      hasMore &&
      element.scrollHeight === element.clientHeight
    ) {
      handleGetMessages();
    } else if (
      element.scrollHeight !== element.clientHeight &&
      !messageLoaded
    ) {
      setMessageLoaded(true);
      element.scrollTo(0, element.scrollHeight - element.clientHeight);
    }
  }, [messages, hasMore, handleGetMessages, messageLoaded]);

  return (
    <div
      className={classes.messagesContainer}
      ref={messagesRef}
      onScroll={onScroll}
    >
      {messages.map(({ content, date, user: { id: messageUserId } }) => (
        <div
          className={cn({
            [classes.recivedMessage]: userId !== messageUserId,
            [classes.sentMessage]: userId === messageUserId,
          })}
        >
          <p>{content}</p>
          <span>{getHoursWithMinutes(date)}</span>
        </div>
      ))}
    </div>
  );
};

export default Messages;
