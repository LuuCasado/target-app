import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { buttonStyles } from "constants/styleTypes";
import { buildQueryUrl } from "utils/helpers";
import routes from "constants/routes";
import Avatar from "components/global/Avatar";
import FirstTarget from "components/home/FirstTarget";
import Welcome from "components/home/Welcome";
import Chats from "components/home/Chats";
import Button from "components/global/Button";
import Map from "components/global/Map";
import LeftContainer from "components/global/LeftContainer";
import RightContainer from "components/global/RightContainer";
import useTargets from "hooks/useTargets";
import useSession from "hooks/useSession";
import useConversations from "hooks/useConversations";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { handleLogout, user } = useSession();
  const { topics, targets, startEditingTarget } = useTargets();
  const [showWelcome, setShowWelcome] = useState(true);
  const { conversations } = useConversations();

  const getLeftColumnContent = useCallback(() => {
    if (!targets.length) {
      return showWelcome ? (
        <Welcome onSubmit={() => setShowWelcome(false)} />
      ) : (
        <div>
          <Avatar user={user} />
          <FirstTarget topics={topics} />
        </div>
      );
    }
    return (
      <>
        <Avatar user={user} />
        <div>
          <Button
            onClick={() => navigate(routes.editProfile)}
            styleType={buttonStyles.link}
            className={classes.buttonEdit}
          >
            Edit
          </Button>{" "}
          /
          <Button onClick={handleLogout} styleType={buttonStyles.link}>
            Logout
          </Button>
        </div>
        <hr className={classes.divider} />
        <Chats conversations={conversations} />
      </>
    );
  }, [
    navigate,
    handleLogout,
    setShowWelcome,
    showWelcome,
    classes,
    conversations,
    user,
    topics,
    targets,
  ]);

  return (
    <div className={classes.container}>
      <LeftContainer hideFooter className={classes.leftContainer}>
        {getLeftColumnContent()}
      </LeftContainer>
      <RightContainer className={classes.rightContainer}>
        <Map
          targets={targets}
          topics={topics}
          startEditingTarget={startEditingTarget}
          onCoordChange={({ lat, lng }) => {
            const url = buildQueryUrl(routes.createTarget, { lat, lng });
            navigate(url);
          }}
        />
      </RightContainer>
    </div>
  );
};

export default Home;
