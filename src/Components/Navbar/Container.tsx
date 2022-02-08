import React, { useState, useEffect } from "react";
// import { withRouter, Redirect } from "react-router-dom";
// import { compose } from "redux";
// import { connect } from "react-redux";
import { useIntl } from "react-intl";

import Viewer from "./Viewer";

// import { logout } from "redux/sessions/sessions-actions";
// import {
//   changeLogoutFetching,
//   redirect_to_login,
// } from "redux/auth/auth-actions";
// import { changeLanguage } from "redux/languages/languages-actions";
// import {changeMenu} from "redux/colapsedNavbar/colapsed-navbar-actions";
// import { set_dark_mode } from "../../redux/dark_mode/dark-mode-actions";

import { handleResize, get_language } from "./usEffect_functions";

interface Iprop {
  window_width: number;
}

const NavbarContainer: React.FC<Iprop> = (props) => {
  const [language, setLanguage] = useState("en");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(true);
  const [smallToolsDropdownOpen, setSmallToolsDropdownOpen] = useState(false);
  const [toggleMenuButton, setToggleMenuButton] = useState(false);
  const [changeMenuBool, setChangeMenuBool] = useState(false);

  const intl = useIntl();

  useEffect(() => {
    get_language(setLanguage);
  }, [window.localStorage.getItem("language_key")]);

  useEffect(() => {
    handleResize(window, setWindowSize, setToggleMenuButton);
  }, [props.window_width]);

  // const click = () => {
  //   if (window.innerWidth < 990) {
  //     const button = document.querySelector(".toggleButton");
  //     button.click();
  //   }
  // };

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const userToggle = () =>
    setUserDropdownOpen((userPrevState) => !userPrevState);

  const smallToolsToggle = () =>
    setSmallToolsDropdownOpen((smallToolsPrevState) => !smallToolsPrevState);

  const menuToggle = () => setChangeMenuBool(!changeMenuBool);

  // const logout = (e) => {
  //   e.preventDefault();
  //   props.changeLogoutFetching(true);
  //   props.logout();
  // };

  return (
    <Viewer
      user={"Hrachya Nalbandyan"}
      logged_in={false}
      logout={false}
      // logout_Is_fetching={props.logout_Is_fetching}
      dark_mode={false}
      // set_dark_mode={props.set_dark_mode}
      // changeLanguage={props.changeLanguage}
      // location={props.history.location}
      // changeMenu={props.changeMenu}
      changeMenuBool={changeMenuBool}
      language={language}
      dropdownOpen={dropdownOpen}
      userDropdownOpen={userDropdownOpen}
      windowSize={windowSize}
      smallToolsDropdownOpen={smallToolsDropdownOpen}
      toggleMenuButton={toggleMenuButton}
      toggle={toggle}
      userToggle={userToggle}
      smallToolsToggle={smallToolsToggle}
      menuToggle={menuToggle}
      // click={click}
      intl={intl}
    />
  );
};

// const mapStateToProps = (state) => ({
//   logged_in: Boolean(state.session.user && !!state.session.user.id),
//   user: state.session.user,
//   logout_Is_fetching: state.auth.logoutIsFetching,
//   projects: state.projects.items,
//   // changeMenuBool: state.colapsedNavbar.changeMenu,
//   logout_redirect_login: state.auth.logout_redirect_login,
//   dark_mode: state.dark_mode_reducer.mode,
// });

// export default compose(
//   connect(mapStateToProps, {
//     // logout,
//     // changeLogoutFetching,
//     // changeLanguage,
//     // changeMenu,
//     // redirect_to_login,
//     // set_dark_mode,
//   })
//   // ,
//   // withRouter
// )(NavbarContainer);

export default NavbarContainer;
