export enum GlobalActionTypes {
  CHANGE_MODE = "CHANGE_MODE",
  CHANGE_LANGUAGE = "CHANGE_LANGUAGE",
}

export interface IinitState {
  dark_mode: boolean;
  changeLanguage: number;
}

interface ChangeModeType {
  type: GlobalActionTypes.CHANGE_MODE;
  payload: boolean;
}

interface ChangeLenguage {
  type: GlobalActionTypes.CHANGE_LANGUAGE;
}

export type GlobalAction = ChangeModeType | ChangeLenguage;
