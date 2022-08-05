import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getConversationSuccessful,
  getMessagesSuccessful,
} from "store/reducers/conversationSlice";
import ConversationService from "services/conversationService";

const useConversations = () => {
  const dispatch = useDispatch();
  const [messagePage, setMessagePage] = useState(0);
  const [hasMoreMessages, setHasMoreMessages] = useState(true);
  const [isFetchingMoreMessages, setIsFetchingMoreMessages] = useState(false);

  const conversations = useSelector(
    (state) => state.conversation.conversations
  );

  const handleGetConversations = useCallback(async () => {
    try {
      const {
        data: { matches },
      } = await ConversationService.getConversation();
      dispatch(getConversationSuccessful(matches));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const handleGetMessages = useCallback(
    async (id) => {
      if (isFetchingMoreMessages) return;
      setIsFetchingMoreMessages(true);
      try {
        const newPage = messagePage + 1;
        const {
          data: { messages },
        } = await ConversationService.getMessages({ id, page: newPage });
        dispatch(getMessagesSuccessful({ messages, page: newPage }));
        setMessagePage(newPage);
        setHasMoreMessages(!!messages.length);
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetchingMoreMessages(false);
      }
    },
    [dispatch, messagePage]
  );

  const handleNewMessage = useCallback(
    (message) => {
      dispatch(getMessagesSuccessful({ messages: [message] }));
    },
    [dispatch]
  );

  useEffect(() => {
    handleGetConversations();
  }, [handleGetConversations]);

  return {
    handleGetConversations,
    handleGetMessages,
    handleNewMessage,
    conversations,
    hasMoreMessages,
  };
};

export default useConversations;
