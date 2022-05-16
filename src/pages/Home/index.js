import React from "react";

import { buttonStyles } from "constants/styleTypes";
import useSession from "hooks/useSession";
import Button from "components/global/Button";
import smilies from "assets/icons/smilies.svg";
import map from "assets/images/map.png";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  const { isLoggedIn, handleLogout } = useSession();

  return (
    <div className={classes.container}>
      <div className={classes.leftColumn}>
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
      </div>
      <div className={classes.map}>
        <img src={map} alt="map  " />
      </div>
    </div>
  );
};

export default Home;
