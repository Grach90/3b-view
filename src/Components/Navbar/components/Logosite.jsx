import React from "react";
import {NavLink} from "react-router-dom";

import Styles from "../styles.module.css";

import Logo from "../../../static/images/3B-logo-only.png";

const Logosite = props => {
  return (
    <div className={Styles.logoContainer}>
      <NavLink
        to="/"
        className={
          "d-flex align-items-center " +
          Styles.logo +
          " " +
          `${
            !props.logout
              ? props.dark_mode
                ? Styles.rightBorder
                : Styles.rightBorderDark
              : ""
          }`
        }
        style={{
          textDecoration: "none",
        }}
      >
        <img src={Logo} alt="logo" className={Styles.logoSize} />

        <span
          className={Styles.text_of_logo}
          style={{
            color: props.dark_mode ? "white" : "black",
          }}
        >
          3BView.nl
        </span>
      </NavLink>
    </div>
  );
};

export default Logosite;