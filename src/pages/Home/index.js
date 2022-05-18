import React from "react";

import Map from "components/global/Map";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div>
          <p>TARGET APP</p>
        </div>
        <div className={classes.rightColumn}>
          <Map />
        </div>
      </div>
    </>
  );
};

export default Home;
