import english from "../../static/images/flag-velikobritanii.png";
import russia from "../../static/images/russiaFlag.png";
import dutch from "../../static/images/dutch-flag.png";

export const handleResize = (window, setWindowSize, setToggleMenuButton) => {
  if (window.innerWidth <= 900) {
    setWindowSize(false);
  } else if (window.innerWidth >= 900) {
    setWindowSize(true);
  }
  setWindowSize(window.innerWidth <= 900 ? false : true);
  setToggleMenuButton(window.innerWidth <= 655 ? true : false);
  if (window.innerWidth <= 655) {
    setToggleMenuButton(true);
  } else {
    setToggleMenuButton(false);
  }
};

export const get_language = (setLanguage) => {
  const language_key = !!window.localStorage.getItem("language_key")
    ? window.localStorage.getItem("language_key")
    : "nl";

  switch (language_key) {
    case "en":
      return setLanguage(english);
    case "ru":
      return setLanguage(russia);
    case "nl":
      return setLanguage(dutch);
    default:
      return setLanguage(dutch);
  }
};
