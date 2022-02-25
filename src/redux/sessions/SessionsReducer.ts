import {
  SessionActionType,
  SessionState,
  SessionAction,
} from "./SessionsTypes";

const initState: SessionState = {
  session: {
    user_id: "",
    email: "",
    first_name: "",
    last_name: "",
    company_name: "",
    role: "",
    source: "",
  },
  errorLogin: "",
};

const Session = (state = initState, action: SessionAction): SessionState => {
  switch (action.type) {
    case SessionActionType.RECEIVE_CURRENT_USER: {
      return {
        ...state,
        session: action.payload,
      };
    }
    case SessionActionType.LOGOUT_CURRENT_USER:
      return {
        ...initState,
      };
    case SessionActionType.GET_ERROR: {
      return {
        ...state,
        errorLogin: action.payload,
      };
    }
    default:
      return state;
  }
};

export default Session;
