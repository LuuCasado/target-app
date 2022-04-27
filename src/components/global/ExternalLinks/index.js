import React from "react";
import appStore from "assets/icons/appstore.svg";
import twitter from "assets/icons/twitter.svg";
import facebook from "assets/icons/facebook.svg";
import useStyles from "./styles";

const ExternalLinks = () => {
  const classes = useStyles();
  return (
    <div className={classes.externalLinks}>
      <a href="https://play.google.com/" target="_blank">
        <img src={appStore} alt="appStore" />
      </a>
      <div className={classes.socialMedia}>
        <a href="https://twitter.com/" target="_blank">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://facebook.com" target="_blank">
          <img src={facebook} alt="facebook" />
        </a>
      </div>
    </div>
  );
};

export default ExternalLinks;
