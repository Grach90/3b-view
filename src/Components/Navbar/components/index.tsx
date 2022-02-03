import React from "react";
import Styles from "../styles.module.css";
import ControlPanel from "./ControlPanel";
import ControlPanelToggle from "./ControlPanelToggle";
import MenuPanel from "./Menu";

const LoginNavbar: React.FC = (props: any) => {
  return (
    <nav
      className={"navbar mx-auto navbar-expand w-100 " + Styles.nav}
      id="navBar"
      style={{ backgroundColor: props.dark_mode ? "black" : "white" }}
    >
      <div className={"container " + Styles.container}>
        <MenuPanel {...props} />
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
