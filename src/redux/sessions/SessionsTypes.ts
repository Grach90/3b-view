export enum SessionActionType {
  RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER",
  LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER",
  GET_ERROR = " GET_ERROR",
}

export interface SessionInterface {
  user_id: string;
  email: string;
  first_name: string;
  last_name: string;
  company_name: string;
  role: string;
  source: string;
}

export interface SessionState {
  session: SessionInterface;
  errorLogin: string;
}

export interface LoginErrorInterface {
  status: number;
  type: string;
  message: string;
}

interface FetchSessionAction {
  type: SessionActionType.RECEIVE_CURRENT_USER;
  payload: SessionInterface;
}

interface FetchLogoutAction {
  type: SessionActionType.LOGOUT_CURRENT_USER;
}

interface FetchGetErrorAction {
  type: SessionActionType.GET_ERROR;
  payload: string;
}

export type SessionAction =
  | FetchSessionAction
  | FetchLogoutAction
  | FetchGetErrorAction;
