import React from "react";

import RightContainer from "components/global/RightContainer";
import LeftContainer from "components/global/LeftContainer";
import SignInForm from "components/auth/SignInForm";
import SamplePhone from "components/global/SamplePhone";
import ExternalLinks from "components/global/ExternalLinks";
import Spinner from "components/global/Spinner";
import useSession from "hooks/useSession";
import smilies from "assets/icons/smilies.svg";
import useStyles from "./styles";

const SignIn = () => {
  const classes = useStyles();
  const { handleLogin, errors, isLoading } = useSession();

  return (
    <div className={classes.container}>
      <LeftContainer className={classes.leftContainer}>
        <img src={smilies} alt="smiliesIcon" />
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
        <Spinner className={classes.spinner} isVisible={isLoading} />
      </LeftContainer>
      <RightContainer className={classes.rightContainer}>
        <SamplePhone />
        <ExternalLinks />
      </RightContainer>
    </div>
  );
};

export default SignIn;
