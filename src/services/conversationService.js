import axios from "axios";

import { base, endpoints } from "constants/api";

class ConversationService {
  static getConversation() {
    return axios.get(`${base}${endpoints.getConversation}`, {
      data: {},
    });
  }

  static getMessages({ id, page = 1 }) {
    return axios.get(
      `${base}${endpoints.getMessages}/${id}/messages?page=${page}`,
      {
        data: {},
      }
    );
  }
}

export default ConversationService;
