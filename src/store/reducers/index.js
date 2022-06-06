import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import targetsReducer from "./targetsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  targets: targetsReducer,
});

export default rootReducer;
