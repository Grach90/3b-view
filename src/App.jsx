import React, { useState, useLayoutEffect, useEffect } from "react";
import { IntlProvider } from "react-intl";

import Navbar from "./Components/Navbar/Container";
import HomePage from "./Components/HomePage/Container";
import LoginPage from "./Components/Login/LoginContainer";

import en from "./translation/en.json";
import nl from "./translation/nl.json";

import "./App.css";

function App() {
  const [language_key, setLanguageKey] = useState("nl");
  // const [window_width, setWindowWidth] = useState(0);

  // useEffect(() => {
  //   setWindowWidth(window.innerWidth);
  // }, [window.innerWidth]);

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  useEffect(() => {
    const language_key_LS = !!window.localStorage.getItem("language_key")
      ? window.localStorage.getItem("language_key")
      : "nl";
    setLanguageKey(language_key_LS);
  }, []);

  const [window_width] = useWindowSize();

  const language = (language_key) => {
    switch (language_key) {
      case "en":
        return en;
      case "nl":
        return nl;
      default:
        return en;
    }
  };
  return (
    <IntlProvider locale={language_key} messages={language(language_key)}>
      <div className="mainContainer">
        <Navbar window_width={window_width} />
        <div className="contentContainer">
          <HomePage />
        </div>
      </div>
    </IntlProvider>
  );
}

export default App;
