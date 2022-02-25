import { GlobalAction, IinitState, GlobalActionTypes } from "./globalTypes";

const get_dark_mode = () => {
  let dark_mode = localStorage.getItem("dark_mode");
  if (dark_mode === null) return false;
  if (dark_mode === "true") return true;
  else return false;
};

const initState: IinitState = {
  dark_mode: get_dark_mode(),
  changeLanguage: 0,
};

const globalReducer = (state = initState, action: GlobalAction): IinitState => {
  switch (action.type) {
    case GlobalActionTypes.CHANGE_MODE: {
      return {
        ...state,
        dark_mode: action.payload,
      };
    }
    case GlobalActionTypes.CHANGE_LANGUAGE: {
      return {
        ...state,
        changeLanguage: state.changeLanguage + 1,
      };
    }
    default:
      return state;
  }
};

export default globalReducer;
