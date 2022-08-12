import React from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

import { ReactComponent as Smilies } from "assets/icons/smilies.svg";
import routes from "constants/routes";
import Button from "components/global/Button";
import RightContainer from "components/global/RightContainer";
import LeftContainer from "components/global/LeftContainer";
import SamplePhone from "components/global/SamplePhone";
import ExternalLinks from "components/global/ExternalLinks";
import Map from "components/global/Map";
import useTargets from "hooks/useTargets";
import useSession from "hooks/useSession";
import useStyles from "./styles";

const aboutText =
  "Cat ipsum dolor sit amet, scratch the furniture. Spit up on light gray carpet instead of adjacent linoleum cough furball yet lounge in doorway but gnaw the corn cob and sit by the fire rub face on everything. Flop over under the bed, or immediately regret falling into bathtub but swat turds around the house. All of a sudden cat goes crazy bleghbleghvomit my furball really tie the room together for destroy couch. Need to chase tail inspect anything brought into the house, yet sleep on dog bed, force dog to sleep on floor. Cat snacks. Eat owner's food nap all day, for chase imaginary bugs, yet throwup on your pillow. Bleghbleghvomit my furball really tie the room together sun bathe attack the dog then pretend like nothing happened Gate keepers of hell and destroy couch, so find empty spot in cupboard and sleep all day groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked!. ";

const About = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const { topics, targets } = useTargets();
  const { isLoggedIn } = useSession();

  if (isLoggedIn) {
    return (
      <div className={classes.container}>
        <LeftContainer className={classes.leftContainer} inRouteHeader>
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
