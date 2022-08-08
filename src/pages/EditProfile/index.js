import React from "react";
import { useSelector } from "react-redux";

import EditProfileForm from "components/auth/EditProfileForm";
import LeftContainer from "components/global/LeftContainer";
import RightContainer from "components/global/RightContainer";
import Avatar from "components/global/Avatar";
import Map from "components/global/Map";
import Spinner from "components/global/Spinner";
import useTargets from "hooks/useTargets";
import useSession from "hooks/useSession";
import useStyles from "./styles";

const EditProfile = () => {
  const classes = useStyles();
  const { data: { email } = {} } = useSelector((state) => state.auth.user);
  const { errors, user, isLoading, handleUpdateInfo, handleChangePassword } =
    useSession();
  const { topics, targets, startEditingTarget } = useTargets();

  return (
    <div className={classes.container}>
      <LeftContainer className={classes.leftContainer}>
        <Avatar user={user} />
        <EditProfileForm
          externalErrors={errors}
          email={email}
          handleUpdateInfo={handleUpdateInfo}
          handleChangePassword={handleChangePassword}
        />
        <Spinner className={classes.spinner} isVisible={isLoading} />
      </LeftContainer>
      <RightContainer className={classes.rightContainer}>
        <Map
          targets={targets}
          topics={topics}
          startEditingTarget={startEditingTarget}
        />
      </RightContainer>
    </div>
  );
};

export default EditProfile;
