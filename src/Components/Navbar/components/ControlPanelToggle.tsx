import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import Styles from "../styles.module.css";

import navbarTools from "../../../static/images/navbarTools.png";
import navbarToolsDark from "../../../static/images/navbarTools-dark.png";
import userIcon from "../../../static/images/userCount.png";
import userIconDark from "../../../static/images/user-dark.png";
import lightModeIcon from "../../../static/images/lightModeIcon.png";
import darkModeIcon from "../../../static/images/darkModeIcon.png";
import Logout from "../../../static/images/iconLogout.png";
import LogoutLight from "../../../static/images/iconLogoutLight.png";

const ControlPanelToggle = (props: any) => {
  return (
    <div
      style={{
        display: "flex",
        justifyItems: "space-around",
        alignItems: "center",
      }}
    >
      <Dropdown
        isOpen={props.smallToolsDropdownOpen}
        className={`d-flex align-items-center justify-content-center ${
          props.dark_mode ? Styles.dropdownBtn : Styles.dropdownBtnLight
        }`}
        toggle={props.smallToolsToggle}
      >
        <DropdownToggle
          caret
          style={{
            background: "unset",
            color: "#BFBFBF",
            border: "none",
            width: "33px",
            height: "33px",
            borderRadius: "50%",
            overflow: "hidden",
            padding: "0",
          }}
        >
          <img
            src={props.dark_mode ? navbarTools : navbarToolsDark}
            style={{
              width: "33px",
              position: "relative",
            }}
            alt="user"
          />
        </DropdownToggle>
        <DropdownMenu
          className={props.dark_mode ? Styles.dropMenu : Styles.dropMenuLight}
          style={{
            marginTop: "20%",
            marginLeft: "-15px",
            width: "55px",
            padding: "5px",
            minWidth: "0",
          }}
        >
          <Dropdown
            isOpen={props.userDropdownOpen}
            className={`d-flex align-items-center justify-content-center ${
              props.dark_mode ? Styles.dropdown : Styles.dropdownLight
            }`}
            toggle={props.userToggle}
          >
            <DropdownToggle
              caret
              style={{
                background: "unset",
                color: "#BFBFBF",
                border: "none",
                width: "33px",
                height: "33px",
                borderRadius: "50%",
                overflow: "hidden",
                padding: "0",
              }}
            >
              <img
                src={props.dark_mode ? userIcon : userIconDark}
                style={{
                  width: "33px",
                  position: "relative",
                }}
                alt="user"
              />
            </DropdownToggle>
            <DropdownMenu
              className={
                props.dark_mode ? Styles.dropMenu : Styles.dropMenuLight
              }
              style={
                props.windowSize
                  ? { top: "110%", left: "-115px", width: "275px" }
                  : {
                      marginTop: "20%",
                      marginLeft: "-250px",
                      width: "275px",
                    }
              }
            >
              <DropdownItem
                className={
                  props.dark_mode
                    ? Styles.dropdownItem
                    : Styles.dropdownItemLight
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
              className={
                props.dark_mode ? Styles.dropMenu : Styles.dropMenuLight
              }
              style={{ marginTop: "20%", marginLeft: "-135px" }}
            >
              <DropdownItem
                onClick={() => {
                  window.localStorage.setItem("language_key", "en");
                  props.changeLanguage();
                }}
                className={
                  props.dark_mode
                    ? Styles.dropdownItem
                    : Styles.dropdownItemLight
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
                  props.dark_mode
                    ? Styles.dropdownItem
                    : Styles.dropdownItemLight
                }
              >
                Dutch
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
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
              <img
                src={props.dark_mode ? lightModeIcon : darkModeIcon}
                alt=""
              />
            </button>
          </div>
          <div className="nav-link" style={{ padding: "5px 0" }}>
            <form
              // onSubmit={props.logout}
              className={Styles.logout}
            >
              <label
                // onClick={() => click()}
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
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ControlPanelToggle;
