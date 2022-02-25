import { rootReducer } from "./root";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export default (prelodedState: object) =>
  createStore(
    rootReducer,
    prelodedState,
    composeWithDevTools(applyMiddleware(thunk))
  );
