import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { genders } from "constants/constants";
import {
  validateEmail,
  isEmpty,
  validatePassword,
  validateConfirmPassword,
} from "constants/validations";
import Input from "components/global/Input";
import Button from "components/global/Button";
import DropdownMenu from "components/global/DropdownMenu";
import useStyles from "./styles";

const SignUpForm = ({
  className,
  handleSignUp,
  externalErrors: [externalError],
}) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleInput = ({ key, value }) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    const errors = {
      name: isEmpty(values.name),
      email: isEmpty(values.email) || validateEmail(values.email),
      password: isEmpty(values.password) || validatePassword(values.password),
      confirmPassword:
        isEmpty(values.confirmPassword) ||
        validateConfirmPassword(values.password, values.confirmPassword),
      gender: isEmpty(values.gender),
    };

    setErrors(errors);
    if (Object.values(errors).some((elem) => elem)) return;

    handleSignUp(values);
  };

  return (
    <div className={cn(classes.containerForm, className)}>
      <div>
        <span>NAME</span>
        <Input
          value={values.name}
          className={classes.input}
          name="name"
          type="text"
          error={errors.name}
          onChange={({ target: { name, value } }) =>
            handleInput({ key: name, value: value })
          }
        />
      </div>
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
        <span>PASSWORD</span>
        <Input
          value={values.password}
          className={classes.input}
          name="password"
          type="password"
          placeholder="MIN. 8 CHARACTERS LONG"
          error={errors.password}
          onChange={({ target: { name, value } }) =>
            handleInput({ key: name, value: value })
          }
        />
      </div>
      <div>
        <span>CONFIRM PASSWORD</span>
        <Input
          value={values.confirmPassword}
          className={classes.input}
          name="confirmPassword"
          type="password"
          error={errors.confirmPassword}
          onChange={({ target: { name, value } }) =>
            handleInput({ key: name, value: value })
          }
        />
      </div>
      <div>
        <span>GENDER</span>
        <DropdownMenu
          value={values.gender}
          onChange={(item) => handleInput({ key: "gender", value: item })}
          options={genders}
          title="SELECT YOUR GENDER"
          error={errors.gender}
        />
      </div>
      {externalError && (
        <p className={classes.error}>Oops!... {externalError}</p>
      )}
      <Button className={classes.button} onClick={handleSubmit}>
        SIGN UP
      </Button>
      <hr className={classes.divider} />
      <Link className={classes.link} to="/sign-in">
        SIGN IN
      </Link>
    </div>
  );
};

export default SignUpForm;
