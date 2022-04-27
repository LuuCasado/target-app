import React from "react";
import phone from "assets/images/phone.png";
import play from "assets/icons/play.svg";
import useStyles from "./styles";

const SamplePhone = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <img className={classes.phone} src={phone} alt="phone" />
        <img className={classes.play} src={play} alt="play" />
      </div>
    </>
  );
};

export default SamplePhone;
