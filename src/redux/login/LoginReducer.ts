import { LoginActionTypes, loginState, LoginAction } from "./LoginTypes";

const initState: loginState = {
  login: {
    email: "",
    password: "",
    isFetching: false,
  },
  logoutIsFetching: false,
  logout_redirect_login: false,
};

const LoginReducer = (state = initState, action: LoginAction): loginState => {
  switch (action.type) {
    case LoginActionTypes.CHANGE_LOGIN_EMAIL: {
      return {
        ...state,
        login: {
          ...state.login,
          email: action.payload,
        },
      };
    }
    case LoginActionTypes.CHANGE_LOGIN_PASSWORD: {
      return {
        ...state,
        login: {
          ...state.login,
          password: action.payload,
        },
      };
    }
    case LoginActionTypes.LOGIN_IS_FETCHING: {
      return {
        ...state,
        login: {
          ...state.login,
          isFetching: action.payload,
        },
      };
    }
    case LoginActionTypes.LOGOUT_IS_FETCHING: {
      return {
        ...state,
        logoutIsFetching: action.payload,
      };
    }
    case LoginActionTypes.LOGOUT_REDIRECT_LOGIN: {
      return {
        ...state,
        logout_redirect_login: action.payload,
      };
    }
    default:
      return state;
  }
};

export default LoginReducer;
