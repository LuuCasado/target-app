import React, { useState } from "react";
import cn from "classnames";

import {
  validateEmail,
  validateEmpty,
  validatePassword,
  validateConfirmPassword,
} from "utils/validations";
import { hasErrors } from "utils/helpers";
import Input from "components/global/Input";
import Button from "components/global/Button";
import useStyles from "./styles";

const EditProfileForm = ({
  className,
  email,
  externalErrors: [externalError] = [],
  handleUpdateInfo,
  handleChangePassword,
}) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: email,
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleInput = ({ key, value }) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    const errors = {
      email: validateEmpty(values.email) || validateEmail(values.email),
    };

    if (values.newPassword) {
      errors.currentPassword = validatePassword(values.currentPassword);
      errors.newPassword = validatePassword(values.newPassword);
      errors.confirmNewPassword = validateConfirmPassword(
        values.newPassword,
        values.confirmNewPassword
      );
    }

    setErrors(errors);
    if (hasErrors(errors)) return;

    if (email !== values.email) {
      handleUpdateInfo({ email: values.email });
    }

    if (values.newPassword) {
      handleChangePassword({
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
        confirmNewPassword: values.confirmNewPassword,
      });
    }
  };

  return (
    <div className={cn(classes.containerForm, className)}>
      <div>
        <span>EMAIL</span>
        <Input
          value={values.email}
          className={classes.input}
          name="email"
          type="email"
          error={errors.email}
          onChange={({ target: { name, value } }) =>
            handleInput({ key: name, value: value })
          }
        />
      </div>
      <div>
        <span>CURRENT PASSWORD</span>
        <Input
          value={values.currentPassword}
          className={classes.input}
          name="currentPassword"
          type="password"
          placeholder="MIN. 8 CHARACTERS LONG"
          error={errors.currentPassword}
          onChange={({ target: { name, value } }) =>
            handleInput({ key: name, value: value })
          }
        />
      </div>
      <div>
        <span>NEW PASSWORD</span>
        <Input
          value={values.newPassword}
          className={classes.input}
          name="newPassword"
          type="password"
          placeholder="MIN. 8 CHARACTERS LONG"
          error={errors.newPassword}
          onChange={({ target: { name, value } }) =>
            handleInput({ key: name, value: value })
          }
        />
      </div>
      <div>
        <span>CONFIRM NEW PASSWORD</span>
        <Input
          value={values.confirmNewPassword}
          className={classes.input}
          name="confirmNewPassword"
          type="password"
          error={errors.confirmNewPassword}
          onChange={({ target: { name, value } }) =>
            handleInput({ key: name, value: value })
          }
        />
      </div>
      {externalError && (
        <p className={classes.error}>Oops!... {externalError}</p>
      )}
      <Button className={classes.button} onClick={handleSubmit}>
        SAVE CHANGES
      </Button>
    </div>
  );
};

export default EditProfileForm;
