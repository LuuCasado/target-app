import { useCallback, useEffect } from "react";

import ConversationService from "services/conversationService";

const useConversations = () => {
  const handleGetConversations = useCallback(async () => {
    try {
      console.log(await ConversationService.getConversation());
    } catch (error) {
      console.log(error);
    }
  }, []);

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
  }, []);

  return { handleGetConversations, handleGetMessages };
};

export default useConversations;
