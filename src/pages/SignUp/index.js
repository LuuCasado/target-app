import React from "react";

import RightContainer from "components/global/RightContainer";
import LeftContainer from "components/global/LeftContainer";
import SignUpForm from "components/auth/SignUpForm";
import SamplePhone from "components/global/SamplePhone";
import ExternalLinks from "components/global/ExternalLinks";
import Spinner from "components/global/Spinner";
import useSession from "hooks/useSession";
import useStyles from "./styles";

const SignUp = () => {
  const classes = useStyles();
  const { handleSignUp, errors, isLoading } = useSession();

  return (
    <div className={classes.container}>
      <LeftContainer className={classes.leftContainer}>
        <h1>SIGN UP</h1>
        <SignUpForm handleSignUp={handleSignUp} externalErrors={errors} />
        <Spinner className={classes.spinner} isVisible={isLoading} />
      </LeftContainer>
      <RightContainer className={classes.rightContainer}>
        <SamplePhone />
        <ExternalLinks />
      </RightContainer>
    </div>
  );
};

export default SignUp;
