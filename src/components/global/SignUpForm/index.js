import React from "react";
import { Link } from "react-router-dom";
import Input from "components/global/Input";
import Button from "components/global/Button";
import DropdownMenu from "components/global/DropdownMenu";
import useStyles from "./styles";

const SignUpForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerForm}>
      <div>
        <span>EMAIL</span>
        <Input className={classes.input} name="email" type="text" />
      </div>
      <div>
        <span>PASSWORD</span>
        <Input
          className={classes.input}
          name="password"
          type="password"
          placeholder="MIN. 6 CHARACTERS LONG"
        />
      </div>
      <div>
        <span>CONFIRM PASSWORD</span>
        <Input
          className={classes.input}
          name="confirmPassword"
          type="password"
        />
      </div>
      <div>
        <span>GENDER</span>
        <DropdownMenu />
      </div>
      <Button className={classes.button}>SIGN UP</Button>
      <hr className={classes.divider} />
      <Link className={classes.link} to={"/sign-in"}>
        SIGN IN
      </Link>
    </div>
  );
};

export default SignUpForm;
