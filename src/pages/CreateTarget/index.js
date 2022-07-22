import React, { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as TargetIcon } from "assets/icons/target.svg";
import { buildQueryUrl } from "utils/helpers";
import routes from "constants/routes";
import CreateTargetForm from "components/auth/CreateTargetForm";
import LeftContainer from "components/global/LeftContainer";
import RightContainer from "components/global/RightContainer";
import useTargets from "hooks/useTargets";
import Map from "components/global/Map";
import useStyles from "./styles";

const CreateTarget = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const startingLatitude = Number(searchParams.get("lat"));
  const startingLongitude = Number(searchParams.get("lng"));

  const { handleCreate, topics, errors, targets, startEditingTarget } =
    useTargets();
  const [mapLongitude, setLongitude] = useState(startingLongitude);
  const [mapLatitude, setLatitude] = useState(startingLatitude);
  const onCoordChange = useCallback(
    ({ lat, lng }) => {
      setLatitude(lat);
      setLongitude(lng);

      const url = buildQueryUrl(routes.createTarget, { lat, lng });
      navigate(url, { replace: true });
    },
    [setLatitude, setLongitude, navigate]
  );

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
        <Map
          onCoordChange={onCoordChange}
          targets={targets}
          topics={topics}
          startEditingTarget={startEditingTarget}
          initialPreviewMarker={{ mapLatitude, mapLongitude }}
        />
      </RightContainer>
    </div>
  );
};

export default CreateTarget;
