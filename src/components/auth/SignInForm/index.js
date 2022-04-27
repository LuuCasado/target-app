import React from "react";
import Input from "components/global/Input";
import Button from "components/global/Button";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const SignInForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <span>EMAIL</span>
        <Input className={classes.input} name="email" type="text" />
      </div>
      <div>
        <span>PASSWORD</span>
        <Input className={classes.input} name="password" type="password" />
      </div>
      <Button className={classes.button}>SIGN IN</Button>
      <Link className={classes.link} to={"/sign-in"}>
        Forgot your password?
      </Link>
    </div>
  );
};

export default SignInForm;
