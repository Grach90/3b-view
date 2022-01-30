import React, { useState, useEffect, useLayoutEffect } from "react";
import { IntlProvider } from "react-intl";

import Navbar from "./Components/Navbar/container";

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
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  const [window_width] = useWindowSize();

  const language = (language_key) => {
    switch (language_key) {
      case "en":
        return en;
      case "nl":
        return nl;
    }
  };
  return (
    <IntlProvider locale={language_key} messages={language(language_key)}>
      <Navbar window_width={window_width}/>
      <div className="App">It works!</div>
    </IntlProvider>
  );
}

export default App;
