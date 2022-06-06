import React, { useState } from "react";
import cn from "classnames";

import { validateEmpty } from "utils/validations";
import { hasErrors } from "utils/helpers";
import Input from "components/global/Input";
import Button from "components/global/Button";
import DropdownMenu from "components/global/DropdownMenu";
import useStyles from "./styles";

const CreateTargetForm = ({
  className,
  handleCreate,
  topics,
  externalErrors: [externalError],
}) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    radius: "200",
    title: "",
    topic: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    topic: "",
  });

  const handleSubmit = () => {
    const errors = {
      title: validateEmpty(values.title),
      topic: validateEmpty(values.topic),
    };

    setErrors(errors);
    if (hasErrors(errors)) return;

    handleCreate(values);
  };

  const handleInput = ({ key, value }) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  return (
    <div className={cn(classes.containerForm, className)}>
      <div>
        <span>SPECIFY AREA LENGHT</span>
        <Input
          className={classes.input}
          value={`${values.radius} m`}
          disabled
        />
        <Input
          type="range"
          min="1"
          max="10000"
          step="1"
          value={values.radius}
          onChange={({ target: { value } }) =>
            handleInput({ key: "radius", value })
          }
        />
      </div>
      <div>
        <span>TARGET TITLE</span>
        <Input
          className={classes.input}
          placeholder="Choose a title for your target"
          error={errors.title}
          onChange={({ target: { value } }) =>
            handleInput({ key: "title", value })
          }
        />
      </div>
      <div>
        <span>SELECT A TOPIC</span>
        <DropdownMenu
          value={values.topic}
          onChange={(value) => handleInput({ key: "topic", value })}
          options={topics.map(({ label }) => label)}
          title="What do you want to talk about?"
          error={errors.topic}
        />
      </div>
      {externalError && (
        <p className={classes.error}>Oops!... {externalError}</p>
      )}
      <Button className={classes.button} onClick={handleSubmit}>
        SAVE TARGET
      </Button>
    </div>
  );
};

export default CreateTargetForm;
