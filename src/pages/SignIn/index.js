import React from "react";

import smilies from "assets/icons/smilies.svg";
import SignInForm from "components/auth/SignInForm/index.js";
import SamplePhone from "components/global/SamplePhone/index.js";
import ExternalLinks from "components/global/ExternalLinks/index.js";
import useSession from "hooks/useSession.js";
import useStyles from "./styles.js";

const SignIn = () => {
  const classes = useStyles();
  const { handleLogin, errors } = useSession();

  return (
    <div className={classes.container}>
      <div className={classes.leftColumn}>
        <img src={smilies} className={classes.smiliesIcon} alt="smiliesIcon" />
        <h1>TARGET MVD</h1>
        <h3>Find people near you & Connect</h3>
        <p>
          Create a target wherever on the map, specify your interest: Travel,
          Dating, Music, etc and start conecting with others who share your
          interest.
        </p>
        <SignInForm
          className={classes.form}
          handleLogin={handleLogin}
          externalErrors={errors}
        />
      </div>
      <div className={classes.rightColumn}>
        <SamplePhone />
        <ExternalLinks />
      </div>
    </div>
  );
};

export default SignIn;
