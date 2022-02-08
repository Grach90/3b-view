import { LoginActionTypes } from "./LoginTypes";

const initState = {
  login: {
    email: "",
    password: "",
    isFetching: false,
  },
  logoutIsFetching: false,
  logout_redirect_login: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case LoginActionTypes.CHANGE_LOGIN_EMAIL: {
      return {
        ...state,
        login: {
          ...state.login,
          email: action.value,
        },
      };
    }
    case LoginActionTypes.CHANGE_LOGIN_PASSWORD: {
      return {
        ...state,
        login: {
          ...state.login,
          password: action.value,
        },
      };
    }
    case LoginActionTypes.LOGIN_IS_FETCHING: {
      return {
        ...state,
        login: {
          ...state.login,
          isFetching: action.bool,
        },
      };
    }
    case LoginActionTypes.LOGIN_IS_FETCHING: {
      return {
        ...state,
        logoutIsFetching: action.bool,
      };
    }
    case LoginActionTypes.LOGOUT_REDIRECT_LOGIN: {
      return {
        ...state,
        logout_redirect_login: action.bool,
      };
    }
    default:
      return state;
  }
};
