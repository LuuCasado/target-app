export const base = "https://target-mvd-api.herokuapp.com";

export const endpoints = {
  signUp: "/api/v1/users",
  signIn: "/api/v1/users/sign_in",
  signOut: "/api/v1/users/sign_out",
  changePassword: "/api/v1/users/password",
  createTarget: "/api/v1/targets",
  getTopics: "/api/v1/topics",
  getTargets: "/api/v1/targets",
  deleteTarget: "/api/v1/targets",
  getConversation: "/api/v1/match_conversations",
  getMessages: "/api/v1/match_conversations",
  getChat: "/api/v1/cable",
};
