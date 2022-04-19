import React from "react";
import SignUpForm from "components/global/SignUpForm/index.js";
import useStyles from "./styles.js";

const SignUp = () => {
  const classes = useStyles();

  return (
    <div>
      <h3>SIGN UP</h3>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
