import React from "react";

import appStore from "assets/icons/appstore.svg";
import twitter from "assets/icons/twitter.svg";
import facebook from "assets/icons/facebook.svg";
import { externalLinks } from "constants/externalLinks";
import useStyles from "./styles";

const ExternalLinks = () => {
  const classes = useStyles();
  return (
    <div className={classes.externalLinks}>
      <a href={externalLinks.appStore} target="_blank">
        <img src={appStore} alt="appStore" />
      </a>
      <div className={classes.socialMedia}>
        <a href={externalLinks.twitter} target="_blank">
          <img src={twitter} alt="twitter" />
        </a>
        <a href={externalLinks.facebook} target="_blank">
          <img src={facebook} alt="facebook" />
        </a>
      </div>
    </div>
  );
};

export default ExternalLinks;
