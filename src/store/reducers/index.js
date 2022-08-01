import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import targetsReducer from "./targetsSlice";
import conversationReducer from "./conversationSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  targets: targetsReducer,
  conversation: conversationReducer,
});

export default rootReducer;
