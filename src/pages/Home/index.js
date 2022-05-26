import React from "react";

import { buttonStyles } from "constants/styleTypes";
import Button from "components/global/Button";
import Map from "components/global/Map";
import LeftContainer from "components/global/LeftContainer";
import RightContainer from "components/global/RightContainer";
import smilies from "assets/icons/smilies.svg";
import useSession from "hooks/useSession";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  const { isLoggedIn, handleLogout } = useSession();

  return (
    <div className={classes.container}>
      <LeftContainer className={classes.leftContainer}>
        <img src={smilies} alt="smiliesIcon" />
        <h2>Welcome to TARGET</h2>
        <h3>Find people near you & Connect</h3>
        {isLoggedIn && (
          <Button onClick={handleLogout} styleType={buttonStyles.link}>
            Logout
          </Button>
        )}
        <p>
          Create a target by clicking wherever on the map, specify the ratio and
          and a topic: Travel, Dating, Music, etc.
        </p>
        <p>
          will start a chat whenever you’ve a match. You can always dismiss a
          conversation if you’re not interested.
        </p>
      </LeftContainer>
      <RightContainer className={classes.rightContainer}>
        <Map />
      </RightContainer>
    </div>
  );
};

export default Home;
