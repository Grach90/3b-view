export enum LoginActionTypes {
  CHANGE_LOGIN_EMAIL = "CHANGE_LOGIN_EMAIL",
  CHANGE_LOGIN_PASSWORD = "CHANGE_LOGIN_PASSWORD",
  LOGIN_IS_FETCHING = "LOGIN_IS_FETCHING",
  LOGOUT_IS_FETCHING = "LOGOUT_IS_FETCHING",
  LOGOUT_REDIRECT_LOGIN = "LOGOUT_REDIRECT_LOGIN",
}

interface loginInterface {
  email: string;
  password: string;
  isFetching: boolean;
}

export interface loginState {
  login: loginInterface;
  logoutIsFetching: boolean;
  logout_redirect_login: boolean;
}

interface ChangeLoginEmailAction {
  type: LoginActionTypes.CHANGE_LOGIN_EMAIL;
  payload: string;
}

interface ChangeLoginPasswordAction {
  type: LoginActionTypes.CHANGE_LOGIN_PASSWORD;
  payload: string;
}

interface LoginIsFetchingAction {
  type: LoginActionTypes.LOGIN_IS_FETCHING;
  payload: boolean;
}

interface LogoutIsFetchingAction {
  type: LoginActionTypes.LOGOUT_IS_FETCHING;
  payload: boolean;
}

interface LogoutRedirectLoginAction {
  type: LoginActionTypes.LOGOUT_REDIRECT_LOGIN;
  payload: boolean;
}

export type LoginAction =
  | ChangeLoginEmailAction
  | ChangeLoginPasswordAction
  | LoginIsFetchingAction
  | LogoutIsFetchingAction
  | LogoutRedirectLoginAction;
