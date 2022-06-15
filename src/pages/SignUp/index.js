import React from "react";

import RightContainer from "components/global/RightContainer/index.js";
import LeftContainer from "components/global/LeftContainer/index.js";
import SignUpForm from "components/auth/SignUpForm/index.js";
import SamplePhone from "components/global/SamplePhone/index.js";
import ExternalLinks from "components/global/ExternalLinks/index.js";
import useSession from "hooks/useSession.js";
import useStyles from "./styles.js";

const SignUp = () => {
  const classes = useStyles();
  const { handleSignUp, errors } = useSession();

  return (
    <div className={classes.container}>
      <LeftContainer className={classes.leftContainer}>
        <h1>SIGN UP</h1>
        <SignUpForm handleSignUp={handleSignUp} externalErrors={errors} />
      </LeftContainer>
      <RightContainer className={classes.rightContainer}>
        <SamplePhone />
        <ExternalLinks />
      </RightContainer>
    </div>
  );
};

export default SignUp;
