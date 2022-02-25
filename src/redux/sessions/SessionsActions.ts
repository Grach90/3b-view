import * as apiUtil from "../../api/session";
import { Dispatch } from "redux";

import {
  changeLoginIsFetching,
  redirect_to_login,
} from "../login/LoginActions";

import {
  changeLoginPassword,
  changeLogoutFetching,
} from "../login/LoginActions";

import { LoginAction } from "../login/LoginTypes";
import {
  SessionActionType,
  SessionInterface,
  SessionAction,
  LoginErrorInterface,
} from "./SessionsTypes";

type DispatchType = SessionAction | LoginAction;

const receiveCurrentUser = (user: SessionInterface): SessionAction => ({
  type: SessionActionType.RECEIVE_CURRENT_USER,
  payload: user,
});

const logoutCurrentUser = (): SessionAction => ({
  type: SessionActionType.LOGOUT_CURRENT_USER,
});

export const getError = (error: string): SessionAction => ({
  type: SessionActionType.GET_ERROR,
  payload: error,
});

export const login = (user: object) => {
  return async (dispatch: Dispatch<DispatchType>) => {
    try {
      console.log("user", user);
      dispatch(changeLoginIsFetching(true));
      const response = await apiUtil.login(user);
      const data = await response.json();
      console.log("loginData", data);
      dispatch(changeLoginIsFetching(false));
      dispatch(changeLoginPassword(""));

      if (data.status >= 400) throw data;

      dispatch(receiveCurrentUser(data));
    } catch (_err: any) {
      const err: LoginErrorInterface = _err;
      return dispatch(getError(err.message));
    }
  };
};

export const logout = () => async (dispatch: Dispatch<DispatchType>) => {
  try {
    dispatch(changeLogoutFetching(true));
    const response = await apiUtil.logout();
    dispatch(changeLogoutFetching(false));

    if (response.status === 204) {
      dispatch(logoutCurrentUser());
      return dispatch(redirect_to_login(true));
    }
    return;
  } catch (err) {
    console.log(err);
    return { status: "error", message: err };
  }
};
