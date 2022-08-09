import React from "react";

import { ReactComponent as TargetIcon } from "assets/icons/target.svg";
import EditTargetForm from "components/auth/EditTargetForm";
import LeftContainer from "components/global/LeftContainer";
import RightContainer from "components/global/RightContainer";
import useTargets from "hooks/useTargets";
import Map from "components/global/Map";
import useStyles from "./styles";

const EditTarget = () => {
  const classes = useStyles();
  const {
    topics,
    errors,
    targets,
    editingTargetId,
    startEditingTarget,
    handleDelete,
    handleEditTarget,
  } = useTargets();

  const target = targets.find(({ id }) => id === editingTargetId);

  return (
    <div className={classes.container}>
      <LeftContainer className={classes.leftContainer} inRouteHeader>
        <TargetIcon />
        <h3 className={classes.title}>EDIT TARGET</h3>
        <EditTargetForm
          topics={topics}
          externalErrors={errors}
          target={target}
          handleDelete={handleDelete}
          handleEditTarget={handleEditTarget}
        />
      </LeftContainer>
      <RightContainer className={classes.rightContainer}>
        <Map
          targets={targets}
          topics={topics}
          startEditingTarget={startEditingTarget}
          editingTargetId={editingTargetId}
        />
      </RightContainer>
    </div>
  );
};

export default EditTarget;
