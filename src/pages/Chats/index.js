import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ActionCable from "actioncable";
import {
  ActionCableConsumer,
  ActionCableProvider,
} from "@thrash-industries/react-actioncable-provider";

import { buildQueryUrl } from "utils/helpers";
import { apiCable } from "constants/api";
import Map from "components/global/Map";
import MessagesInput from "components/chat/MessageInput";
import LeftContainer from "components/global/LeftContainer";
import RightContainer from "components/global/RightContainer";
import Messages from "components/chat/Messages";
import UserConversationInfo from "components/chat/UserConversationInfo";
import useSession from "hooks/useSession";
import useConversations from "hooks/useConversations";
import useTargets from "hooks/useTargets";
import useStyles from "./styles";

const Chats = () => {
  const classes = useStyles();

  const headers = useSelector((state) => state.auth.headers);
  const messages = useSelector((state) => state.conversation.messages);
  const channelRef = useRef();

  const { search } = useLocation();
  const {
    user: { id },
  } = useSession();
  const { topics, targets, startEditingTarget } = useTargets();
  const {
    handleGetMessages,
    handleNewMessage,
    conversations,
    hasMoreMessages,
  } = useConversations();

  const searchParams = new URLSearchParams(search);
  const matchId = Number(searchParams.get("match_id"));

  useEffect(() => {
    handleGetMessages(matchId);
  }, [matchId]);

  if (!headers.uid) return null;

  const cable = ActionCable.createConsumer(
    buildQueryUrl(apiCable, {
      "access-token": headers["access-token"],
      client: headers.client,
      uid: headers.uid,
    })
  );

  const sendMessage = (content) => {
    channelRef.current.perform("send_message", {
      content,
      match_conversation_id: matchId,
    });
  };

  const matchedUser = conversations.find(
    (conversation) => conversation.match_id === matchId
  );

  return (
    <div className={classes.container}>
      <LeftContainer className={classes.leftContainer}>
        <ActionCableProvider cable={cable}>
          <ActionCableConsumer
            channel={{
              channel: "ChatChannel",
              match_conversation_id: matchId,
            }}
            ref={channelRef}
            onReceived={handleNewMessage}
          >
            {matchedUser && <UserConversationInfo user={matchedUser} />}
            <Messages
              messages={messages}
              userId={id}
              handleGetMessages={() => handleGetMessages(matchId)}
              hasMore={hasMoreMessages}
            />
            <MessagesInput onSubmit={sendMessage} />
          </ActionCableConsumer>
        </ActionCableProvider>
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

export default Chats;
