import React from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

import { ReactComponent as Smilies } from "assets/icons/smilies.svg";
import { aboutText } from "constants/constants";
import routes from "constants/routes";
import Button from "components/global/Button";
import RightContainer from "components/global/RightContainer";
import LeftContainer from "components/global/LeftContainer";
import SamplePhone from "components/global/SamplePhone/index.js";
import ExternalLinks from "components/global/ExternalLinks/index.js";
import Map from "components/global/Map";
import useTargets from "hooks/useTargets";
import useSession from "hooks/useSession";
import useStyles from "./styles";

const About = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const { topics, targets } = useTargets();
  const { isLoggedIn } = useSession();

  if (isLoggedIn) {
    return (
      <div className={classes.container}>
        <LeftContainer className={classes.leftContainer}>
          <p>{aboutText}</p>
        </LeftContainer>
        <RightContainer className={classes.rightContainer}>
          <Map targets={targets} topics={topics} />
        </RightContainer>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <LeftContainer className={classes.leftContainer}>
        <Smilies className={classes.smilies} />
        <h3>What's TARGET?</h3>
        <p>{aboutText}</p>
        <Button
          className={classes.button}
          onClick={() => navigate(routes.signIn)}
        >
          GET STARTED!
        </Button>
      </LeftContainer>
      <RightContainer
        className={cn(classes.rightContainer, classes.commonRightContainer)}
      >
        <SamplePhone />
        <ExternalLinks />
      </RightContainer>
    </div>
  );
};

export default About;
