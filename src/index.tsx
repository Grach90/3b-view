import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { checkLoggedIn } from "./api/session";
import { Provider } from "react-redux";
import ConfigureStore from "./redux/store";
import App from "./App";

// window.state = store.getState;
const renderApp = async (preloadedState: object) => {
  const store = ConfigureStore(await preloadedState);
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderApp(checkLoggedIn());
