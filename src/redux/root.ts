import { combineReducers } from "redux";

import LoginReducer from "./login/LoginReducer";
import SessionReducer from "./sessions/SessionsReducer";
import GlobalReducer from "./global/globalReducer";

export const rootReducer = combineReducers({
  loginState: LoginReducer,
  sessionState: SessionReducer,
  globalState: GlobalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
