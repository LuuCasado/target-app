import React, { useCallback, useState } from "react";
import cn from "classnames";

import { buttonStyles } from "constants/styleTypes";
import { validateEmpty } from "utils/validations";
import { hasErrors } from "utils/helpers";
import Input from "components/global/Input";
import Button from "components/global/Button";
import DropdownMenu from "components/global/DropdownMenu";
import useStyles from "./styles";

const EditTargetForm = ({
  className,
  topics,
  target,
  externalErrors: [externalError],
  handleDelete,
  handleEditTarget,
}) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    radius: target.radius.toString(),
    title: target.title,
    topic: topics.find(({ id }) => id === target.topic_id).label,
  });

  const [errors, setErrors] = useState({
    title: "",
    topic: "",
  });

  const handleSubmit = useCallback(() => {
    const errors = {
      title: validateEmpty(values.title),
      topic: validateEmpty(values.topic),
    };

    setErrors(errors);
    if (hasErrors(errors)) return;

    handleEditTarget({ ...target, ...values });
  }, [values, setErrors, handleEditTarget]);

  const handleInput = useCallback(
    ({ key, value }) => {
      setValues({
        ...values,
        [key]: value,
      });
    },
    [setValues, values]
  );
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
          value={values.title}
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
      <div className={classes.buttons}>
        <Button
          onClick={() => handleDelete(target.id)}
          styleType={buttonStyles.remove}
        >
          DELETE
        </Button>
        <Button onClick={handleSubmit}>SAVE</Button>
      </div>
    </div>
  );
};

export default EditTargetForm;
