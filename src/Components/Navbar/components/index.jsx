import React from "react";
import Styles from "../styles.module.css";
import ControlPanel from "./Control-panel";
import ControlPanelToggle from "./Control-panel-toggle";

const LoginNavbar = (props) => {
  return (
    <nav
      className={"navbar mx-auto navbar-expand w-100 " + Styles.nav}
      id="navBar"
      style={{ backgroundColor: props.dark_mode ? "black" : "white" }}
    >
      <div className={"container " + Styles.container}>
        {props.windowSize ? (
          <ControlPanel {...props} />
        ) : (
          <ControlPanelToggle {...props} />
        )}
      </div>
    </nav>
  );
};

export default LoginNavbar;
