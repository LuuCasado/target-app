import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getConversationSuccessful } from "store/reducers/conversationSlice";
import ConversationService from "services/conversationService";

const useConversations = () => {
  const dispatch = useDispatch();

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

  const handleGetMessages = useCallback(async (id) => {
    try {
      console.log(await ConversationService.getMessages({ id }));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    handleGetConversations();
    //handleGetMessages();
  }, [handleGetConversations]);

  return { handleGetConversations, handleGetMessages, conversations };
};

export default useConversations;
