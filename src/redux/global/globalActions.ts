import { GlobalActionTypes, GlobalAction } from "./globalTypes";

export const set_dark_mode = (mode: boolean): GlobalAction => ({
  type: GlobalActionTypes.CHANGE_MODE,
  payload: mode,
});

export const changeLanguage = (): GlobalAction => ({
  type: GlobalActionTypes.CHANGE_LANGUAGE,
});
