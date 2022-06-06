import React, { useState } from "react";

import { ReactComponent as TargetIcon } from "assets/icons/target.svg";
import CreateTargetForm from "components/auth/CreateTargetForm";
import LeftContainer from "components/global/LeftContainer";
import RightContainer from "components/global/RightContainer";
import useTargets from "hooks/useTargets";
import Map from "components/global/Map";
import useStyles from "./styles";

const CreateTarget = () => {
  const classes = useStyles();
  const { handleCreate, topics, errors } = useTargets();
  const [mapLongitude, setLongitude] = useState();
  const [mapLatitude, setLatitude] = useState();
  const onCoordChange = ({ lat, long }) => {
    setLatitude(lat);
    setLongitude(long);
  };

  return (
    <div className={classes.container}>
      <LeftContainer className={classes.leftContainer}>
        <TargetIcon />
        <h3 className={classes.title}>CREATE A NEW TARGET</h3>
        <CreateTargetForm
          topics={topics}
          externalErrors={errors}
          handleCreate={({ ...props }) =>
            handleCreate({ ...props, mapLongitude, mapLatitude })
          }
        />
      </LeftContainer>
      <RightContainer className={classes.rightContainer}>
        <Map onCoordChange={onCoordChange} />
      </RightContainer>
    </div>
  );
};

export default CreateTarget;
