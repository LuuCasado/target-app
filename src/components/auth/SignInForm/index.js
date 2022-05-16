import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  validateEmail,
  validateEmpty,
  validatePassword,
} from "utils/validations";
import { hasErrors } from "utils/helpers";
import { buttonStyles } from "constants/styleTypes";
import routes from "constants/routes";
import Input from "components/global/Input";
import Button from "components/global/Button";
import useStyles from "./styles";

const SignInForm = ({ handleLogin, externalErrors: [externalError] }) => {
  const classes = useStyles();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    const errors = {
      email: validateEmpty(values.email) || validateEmail(values.email),
      password:
        validateEmpty(values.password) || validatePassword(values.password),
    };

    setErrors(errors);
    if (hasErrors(errors)) return;

    handleLogin(values);
  };

  const handleInput = ({ key, value }) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  return (
    <div className={classes.container}>
      <div>
        <span>EMAIL</span>
        <Input
          className={classes.input}
          name="email"
          type="text"
          error={errors.email}
          onChange={({ target: { name, value } }) =>
            handleInput({ key: name, value: value })
          }
        />
      </div>
      <div>
        <span>PASSWORD</span>
        <Input
          className={classes.input}
          name="password"
          type="password"
          error={errors.password}
          onChange={({ target: { name, value } }) =>
            handleInput({ key: name, value: value })
          }
        />
      </div>
      {externalError && (
        <p className={classes.error}>Oops!... {externalError}</p>
      )}
      <Button className={classes.button} onClick={handleSubmit}>
        SIGN IN
      </Button>
      <Link className={classes.forgotPassword} to={routes.signUp}>
        Forgot your password?
      </Link>
      <hr className={classes.divider} />
      <Link className={classes.link} to={routes.signUp}>
        SIGN UP
      </Link>
    </div>
  );
};

export default SignInForm;
