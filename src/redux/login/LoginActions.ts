import {LoginActionTypes} from "./LoginTypes";

export const changeLoginEmail = (value: string) => ({
  type: LoginActionTypes.CHANGE_LOGIN_EMAIL,
  value,
});
export const changeLoginIsFetching = (bool: boolean) => ({
  type: LoginActionTypes.LOGIN_IS_FETCHING,
  bool,
});
export const changeLoginPassword = (value: string) => ({
  type: LoginActionTypes.CHANGE_LOGIN_PASSWORD,
  value,
});
export const changeLogoutFetching = (bool: boolean) => ({
  type: LoginActionTypes.LOGOUT_IS_FETCHING,
  bool,
});
export const redirect_to_login = (bool: boolean) => ({
  type: LoginActionTypes.LOGOUT_REDIRECT_LOGIN,
  bool,
});
