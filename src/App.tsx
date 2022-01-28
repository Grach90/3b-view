import React, { useState } from "react";
import { IntlProvider } from "react-intl";

import Navbar from "./Components/Navbar/container";

import en from "../src/translation/en.json";
import nl from "../src/translation/nl.json";

import "./App.css";

function App() {
  const [language_key, setLanguageKey] = useState("nl");

  const language = (language_key: string) => {
    switch (language_key) {
      case "en":
        return en;
      case "nl":
        return nl;
    }
  };
  return (
    <IntlProvider locale={language_key} messages={language(language_key)}>
      <Navbar />
      <div className="App">It works!</div>
    </IntlProvider>
  );
}

export default App;
