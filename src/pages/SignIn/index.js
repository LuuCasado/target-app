import React from "react";
import smilies from "assets/icons/smilies.svg";
import SignInForm from "components/auth/SignInForm/index.js";
import useStyles from "./styles.js";

const SignIn = () => {
  const classes = useStyles();

  return (
    <div>
      <img src={smilies} className={classes.smiliesIcon} alt="smiliesIcon" />
      <h1>TARGET MVD</h1>
      <h3>Find people near you & Connect</h3>
      <p>
        Create a target wherever on the map, specify your interest: Travel,
        Dating, Music, etc and start conecting with others who share your
        interest.
      </p>
      <SignInForm />
    </div>
  );
};

export default SignIn;
