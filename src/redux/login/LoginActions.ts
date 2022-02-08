import {
  CHANGE_LOGIN_EMAIL,
  LOGIN_IS_FETCHING,
  CHANGE_LOGIN_PASSWORD,
  LOGOUT_IS_FETCHING,
  LOGOUT_REDIRECT_LOGIN,
} from "./login/LoginTypes.js";

export const changeLoginEmail = (value: string) => ({
  type: CHANGE_LOGIN_EMAIL,
  value,
});
export const changeLoginIsFetching = (bool: boolean) => ({
  type: LOGIN_IS_FETCHING,
  bool,
});
export const changeLoginPassword = (value: string) => ({
  type: CHANGE_LOGIN_PASSWORD,
  value,
});
export const changeLogoutFetching = (bool: boolean) => ({
  type: LOGOUT_IS_FETCHING,
  bool,
});
export const redirect_to_login = (bool: boolean) => ({
  type: LOGOUT_REDIRECT_LOGIN,
  bool,
});
