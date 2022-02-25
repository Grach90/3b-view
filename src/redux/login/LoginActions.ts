import { LoginActionTypes, LoginAction } from "./LoginTypes";

export const changeLoginEmail = (value: string): LoginAction => ({
  type: LoginActionTypes.CHANGE_LOGIN_EMAIL,
  payload: value,
});
export const changeLoginIsFetching = (bool: boolean): LoginAction => ({
  type: LoginActionTypes.LOGIN_IS_FETCHING,
  payload: bool,
});
export const changeLoginPassword = (value: string): LoginAction => ({
  type: LoginActionTypes.CHANGE_LOGIN_PASSWORD,
  payload: value,
});
export const changeLogoutFetching = (bool: boolean): LoginAction => ({
  type: LoginActionTypes.LOGOUT_IS_FETCHING,
  payload: bool,
});
export const redirect_to_login = (bool: boolean): LoginAction => ({
  type: LoginActionTypes.LOGOUT_REDIRECT_LOGIN,
  payload: bool,
});
