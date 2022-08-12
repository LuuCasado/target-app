import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import targetsReducer from "./targetsSlice";
import conversationReducer from "./conversationSlice";
import layoutReducer from "./layoutSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  targets: targetsReducer,
  conversation: conversationReducer,
  layout: layoutReducer,
});

export default rootReducer;
