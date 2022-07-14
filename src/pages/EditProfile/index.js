import React from "react";
import { useSelector } from "react-redux";

import { ReactComponent as User } from "assets/icons/user.svg";
import EditProfileForm from "components/auth/EditProfileForm";
import LeftContainer from "components/global/LeftContainer";
import RightContainer from "components/global/RightContainer";
import Map from "components/global/Map";
import useTargets from "hooks/useTargets";
import useSession from "hooks/useSession";
import useStyles from "./styles";

const EditProfile = () => {
  const classes = useStyles();
  const { data: { username, email, id } = {} } = useSelector(
    (state) => state.auth.user
  );
  const { errors, handleUpdateInfo, handleChangePassword } = useSession();
  const { topics, targets } = useTargets();

  if (!username) return null;

  return (
    <div className={classes.container}>
      <LeftContainer className={classes.leftContainer}>
        <User className={classes.user} />
        <div className={classes.userName}>{username}</div>
        <EditProfileForm
          externalErrors={errors}
          email={email}
          handleUpdateInfo={handleUpdateInfo}
          handleChangePassword={handleChangePassword}
        />
      </LeftContainer>
      <RightContainer className={classes.rightContainer}>
        <Map targets={targets} topics={topics} />
      </RightContainer>
    </div>
  );
};

export default EditProfile;
