import React from "react";

import useSession from "hooks/useSession.js";
import SignUpForm from "components/auth/SignUpForm/index.js";
import SamplePhone from "components/global/SamplePhone/index.js";
import ExternalLinks from "components/global/ExternalLinks/index.js";
import useStyles from "./styles.js";

const SignUp = () => {
  const classes = useStyles();
  const { handleSignUp, errors } = useSession();

  return (
    <div className={classes.container}>
      <div className={classes.leftColumn}>
        <h3>SIGN UP</h3>
        <SignUpForm
          className={classes.form}
          handleSignUp={handleSignUp}
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

export default SignUp;
