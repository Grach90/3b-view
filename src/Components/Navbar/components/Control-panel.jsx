import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import Styles from "../styles.module.css";

import userIcon from "../../../static/images/userCount.png";
import userIconDark from "../../../static/images/user-dark.png";
import lightModeIcon from "../../../static/images/lightModeIcon.png";
import darkModeIcon from "../../../static/images/darkModeIcon.png";
import Logout from "../../../static/images/iconLogout.png";
import LogoutLight from "../../../static/images/iconLogoutLight.png";

const ControlPanel = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyItems: "space-around",
        alignItems: "center",
      }}
    >
      <div
        className={"nav-link " + Styles.username}
        style={{ padding: "8px 0" }}
      >
        <Dropdown
          isOpen={props.userDropdownOpen}
          className={`d-flex align-items-center justify-content-center ${
            props.dark_mode ? Styles.dropdown : Styles.dropdownLight
          }`}
          toggle={props.userToggle}
        >
          <DropdownToggle caret className={Styles.smallToolsDrop}>
            <img src={props.dark_mode ? userIcon : userIconDark} alt="user" />
          </DropdownToggle>
          <DropdownMenu
            className={props.dark_mode ? Styles.dropMenu : Styles.dropMenuLight}
            style={{
              marginTop: "20%",
              marginLeft: "-240px",
              width: "275px",
            }}
          >
            <DropdownItem
              className={
                props.dark_mode ? Styles.dropdownItem : Styles.dropdownItemLight
              }
            >
              <span
                style={{
                  marginRight: "5px",
                  color: props.dark_mode ? "white" : "black",
                }}
              >
                {/* {props.user.email} */}
              </span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="nav-link" style={{ padding: "8px 6px" }}>
        <Dropdown
          isOpen={props.dropdownOpen}
          className={`d-flex align-items-center justify-content-center ${
            props.dark_mode ? Styles.dropdown : Styles.dropdownLight
          }`}
          toggle={props.toggle}
        >
          <DropdownToggle caret className={Styles.languageDrop}>
            <img src={props.language} className={Styles.flagStyle} alt="" />
          </DropdownToggle>

          <DropdownMenu
            className={props.dark_mode ? Styles.dropMenu : Styles.dropMenuLight}
            style={{ marginTop: "20%", marginLeft: "-130px" }}
          >
            <DropdownItem
              onClick={() => {
                window.localStorage.setItem("language_key", "en");
                props.changeLanguage();
              }}
              className={
                props.dark_mode ? Styles.dropdownItem : Styles.dropdownItemLight
              }
            >
              English
            </DropdownItem>

            <DropdownItem
              onClick={() => {
                window.localStorage.setItem("language_key", "nl");
                props.changeLanguage();
              }}
              className={
                props.dark_mode ? Styles.dropdownItem : Styles.dropdownItemLight
              }
            >
              Dutch
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div
        className={`nav-link d-flex align-items-center justify-content-center ${
          props.dark_mode ? Styles.modeBtn : Styles.modeBtnLight
        } `}
      >
        <button
          style={{ outlineStyle: "none" }}
          onClick={() => {
            const value = !!window.localStorage.getItem("dark_mode")
              ? window.localStorage.getItem("dark_mode")
              : "false";
            const localValue = value === "true" ? "false" : "true";
            const rteduxValue = value === "true" ? false : true;
            window.localStorage.setItem("dark_mode", localValue);
            props.set_dark_mode(rteduxValue);
          }}
        >
          <img src={props.dark_mode ? lightModeIcon : darkModeIcon} alt="" />
        </button>
      </div>
      <div className="nav-link" style={{ padding: "8px 15px 8px 6px" }}>
        <form onSubmit={props.logout} className={Styles.logout}>
          <label
            htmlFor="logout"
            title={props.intl.formatMessage({
              id: "boilerplate.Navbar.items.logOut",
            })}
            className={`d-flex align-items-center justify-content-center ${
              props.dark_mode ? Styles.logOutLabel : Styles.logOutLabelLight
            }`}
          >
            <img src={props.dark_mode ? Logout : LogoutLight} alt="" />
          </label>

          <input
            id="logout"
            type="submit"
            style={{ display: "none" }}
            disabled={props.logout_Is_fetching}
          />
        </form>
      </div>
    </div>
  );
};

export default ControlPanel;
