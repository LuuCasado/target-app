import React, { useState, useCallback } from "react";

import Input from "components/global/Input";
import Button from "components/global/Button";
import useStyles from "./styles";

const MessagesInput = ({ onSubmit }) => {
  const classes = useStyles();
  const [message, setMessage] = useState("");

  const handleInput = useCallback(
    (event) => {
      setMessage(event.target.value);
    },
    [setMessage]
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      onSubmit(message);
      setMessage("");
    },
    [onSubmit, message]
  );

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <Input className={classes.input} onChange={handleInput} value={message} />
      <Button type="submit">SEND</Button>
    </form>
  );
};

export default MessagesInput;
