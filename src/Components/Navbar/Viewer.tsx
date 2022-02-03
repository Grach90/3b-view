import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import LoginNavbar from "./components";
import Logosite from "./components/Logosite";

import messages from "./messages";
import { ViewerProps } from "./interface";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import Styles from "./styles.module.css";
import "./popover.css";

// import Logout from "../../static/images/iconLogout.png";
// import LogoutLight from "../../static/images/iconLogoutLight.png";
import lightModeIcon from "../../static/images/lightModeIcon.png";
import darkModeIcon from "../../static/images/darkModeIcon.png";
// import userIcon from "../../static/images/userCount.png";
// import userIconDark from "../../static/images/user-dark.png";
// import navbarTools from "../../static/images/navbarTools.png";
// import navbarToolsDark from "../../static/images/navbarTools-dark.png";
// import menuIcon from "../../static/images/baseline_menu_white_18dp.png";
// import menuCloseIcon from "../../static/images/baseline_close_white_18dp.png";
// import menuIconDark from "../../static/images/baseline_menu_black_18dp.png";
// import menuCloseIconDark from "../../static/images/baseline_close_black_18dp.png";

// changeMenuBool = { changeMenuBool };
// language = { language };
// dropdownOpen = { dropdownOpen };
// userDropdownOpen = { userDropdownOpen };
// windowSize = { windowSize };
// smallToolsDropdownOpen = { smallToolsDropdownOpen };
// toggleMenuButton = { toggleMenuButton };
// toggle = { toggle };
// userToggle = { userToggle };
// smallToolsToggle = { smallToolsToggle };
// menuToggle = { menuToggle };

const Navbar: React.FC<ViewerProps> = (props) => {
  return props.logged_in ? (
    <LoginNavbar {...props} />
  ) : (
    <nav
      className={"navbar navbar-expand " + Styles.nav}
      id="navBar"
      style={{ backgroundColor: props.dark_mode ? "black" : "white" }}
    >
      <div className={"container " + Styles.container}>
        <Logosite />
        <div className="row">
          <div className="col">
            <ul
              className={
                "navbar-nav mr-auto pl-3 " + Styles.ulIn + " " + Styles.ulIn1
              }
            >
              <li className="nav-item h-100 d-flex align-items-center">
                <Dropdown
                  isOpen={props.dropdownOpen}
                  className={`d-flex align-items-center justify-content-center ${
                    props.dark_mode ? Styles.dropdownIn : Styles.dropdownInLight
                  }`}
                  toggle={props.toggle}
                >
                  <DropdownToggle caret className={Styles.languageDropIn}>
                    <img
                      src={props.language}
                      className={Styles.flagStyleIn}
                      alt=""
                    />
                  </DropdownToggle>

                  <DropdownMenu
                    className={
                      props.dark_mode ? Styles.dropMenu : Styles.dropMenuLight
                    }
                    style={{
                      marginTop: "20%",
                      marginLeft: "-70px",
                    }}
                  >
                    <DropdownItem
                      onClick={() => {
                        window.localStorage.setItem("language_key", "en");
                        // props.changeLanguage();
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
                        // props.changeLanguage();
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
              </li>

              <li
                className={
                  `nav-item px-2 h-100 d-flex align-items-center ` +
                  Styles.barItem
                }
              >
                <div
                  className={`nav-link d-flex align-items-center justify-content-center ${
                    props.dark_mode ? Styles.modeBtnIn : Styles.modeBtnInLight
                  } `}
                >
                  <button
                    style={{ outlineStyle: "none" }}
                    className="d-flex justify-content-center align-items-center"
                    onClick={() => {
                      const value = !!window.localStorage.getItem("dark_mode")
                        ? window.localStorage.getItem("dark_mode")
                        : "false";
                      const localValue = value === "true" ? "false" : "true";
                      // const rteduxValue = value === "true" ? false : true;
                      window.localStorage.setItem("dark_mode", localValue);
                      // props.set_dark_mode(rteduxValue);
                    }}
                  >
                    <img
                      src={props.dark_mode ? lightModeIcon : darkModeIcon}
                      alt=""
                      className={Styles.modeBtnImg}
                    />
                  </button>
                </div>
              </li>
              {/* {props.location.pathname === "/login" ||
            props.location.pathname === "/signup" ? null : ( */}
              <li
                className={
                  "nav-item px-2 h-100 d-flex align-items-center " +
                  Styles.signInFont
                }
              >
                <Link
                  to="/login"
                  className={`nav-link ${Styles.signInBtn} ${Styles.navLink} d-flex align-items-center justify-content-center btn`}
                  style={{ color: "white" }}
                >
                  <FormattedMessage {...messages.signIn} />
                </Link>
              </li>
              {/* )} */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
