import React from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Collapse } from "reactstrap";
import Logosite from "./Logosite";

import messages from "../messages";
import Styles from "../styles.module.css";

import menuIcon from "../../../static/images/baseline_menu_white_18dp.png";
import menuCloseIcon from "../../../static/images/baseline_close_white_18dp.png";
import menuIconDark from "../../../static/images/baseline_menu_black_18dp.png";
import menuCloseIconDark from "../../../static/images/baseline_close_black_18dp.png";

const Menu = (props) => {
  return (
    <>
    {!props.toggleMenuButton ? (
      <Logosite dark_mode={props.dark_mode} />
    ) : (
      <div style={{display: "flex", alignItems: "center"}}>
        <button
          onClick={() => props.menuToggle()}
          className="toggleButton"
          style={{outlineStyle: "none"}}
        >
          <img
            src={
              !props.changeMenuBool
                ? props.dark_mode
                  ? menuIcon
                  : menuIconDark
                : props.dark_mode
                ? menuCloseIcon
                : menuCloseIconDark
            }
            alt=""
          />
        </button>
        <Logosite
          dark_mode={props.dark_mode}
          dropdownOpen={props.dropdownOpen}
        />
      </div>
    )}
    {!props.toggleMenuButton ? (
      <ul className={"navbar-nav mr-auto pl-3 " + Styles.ul}>
        <li className={"nav-item px-2 h-100 " + Styles.navItem}>
          <NavLink
            to=""
            // {`/${props.user.company_names[0]}/projects`}
            activeClassName={
              props.dark_mode ? Styles.active : Styles.activeLight
            }
            className={`nav-link ${
              props.dark_mode ? Styles.navLink : Styles.navLinkLight
            } h-100 d-flex align-items-center`}
          >
            <FormattedMessage {...messages.company} />
          </NavLink>
        </li>

        <li className={"nav-item px-2 h-100 " + Styles.navItem}>
          <NavLink
            to=""
            // {`/${props.user.company_names[0]}/ilschecker`}
            activeClassName={
              props.dark_mode ? Styles.active : Styles.activeLight
            }
            className={`nav-link ${
              props.dark_mode ? Styles.navLink : Styles.navLinkLight
            } h-100 d-flex align-items-center`}
          >
            <FormattedMessage {...messages.ilsCheck} />
          </NavLink>
        </li>
        <li className={"nav-item px-2 h-100 " + Styles.navItem}>
          <NavLink
            to=""
            // {`/${props.user.company_names[0]}/format_change`}
            activeClassName={
              props.dark_mode ? Styles.active : Styles.activeLight
            }
            className={`nav-link ${
              props.dark_mode ? Styles.navLink : Styles.navLinkLight
            } h-100 d-flex align-items-center`}
          >
            <FormattedMessage {...messages.formatChange} />
          </NavLink>
        </li>
        <li
          className={"nav-item px-2 h-100 " + Styles.navItem}
          // style={{
          //   display:
          //     props.user.role === "3B Manager" ||
          //     props.user.role === "Project Manager"
          //       ? "block"
          //       : "none",
          // }}
        >
          <NavLink
            to={"/admin"}
            activeClassName={
              props.dark_mode ? Styles.active : Styles.activeLight
            }
            className={`nav-link ${
              props.dark_mode ? Styles.navLink : Styles.navLinkLight
            } h-100 d-flex align-items-center`}
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    ) : (
      <div className={"navbar-nav mr-auto pl-3"}>
        <Collapse
          isOpen={props.changeMenuBool}
          className={
            props.dark_mode ? Styles.colapseBar : Styles.colapseBarLight
          }
        >
          <ul className={"navbar-nav mr-auto " + Styles.ul}>
            <li className={"nav-item px-2 h-100 " + Styles.navItem}>
              <NavLink
                to=""
                // {`/${props.user.company_names[0]}/projects`}
                activeClassName={
                  props.dark_mode ? Styles.active : Styles.activeLight
                }
                className={`nav-link ${
                  props.dark_mode ? Styles.navLink : Styles.navLinkLight
                } h-100 d-flex align-items-center`}
                onClick={() => props.click()}
              >
                <FormattedMessage {...messages.company} />
              </NavLink>
            </li>

            <li className={"nav-item px-2 h-100 " + Styles.navItem}>
              <NavLink
                to=""
                // {`/${props.user.company_names[0]}/ilschecker`}
                onClick={() => props.click()}
                activeClassName={
                  props.dark_mode ? Styles.active : Styles.activeLight
                }
                className={`nav-link ${
                  props.dark_mode ? Styles.navLink : Styles.navLinkLight
                } h-100 d-flex align-items-center`}
              >
                <FormattedMessage {...messages.ilsCheck} />
              </NavLink>
            </li>

            {/* <li className={"nav-item px-2 h-100 " + Styles.navItem}>
              <NavLink
                to={`/${props.user.company_names[0]}/format_change`}
                onClick={() => click()}
                activeClassName={
                  props.dark_mode ? Styles.active : Styles.activeLight
                }
                className={`nav-link ${
                  props.dark_mode ? Styles.navLink : Styles.navLinkLight
                } h-100 d-flex align-items-center`}
              >
                <FormattedMessage {...messages.formatChange} />
              </NavLink>
            </li> */}
            <li
              className={"nav-item px-2 h-100 " + Styles.navItem}
              // style={{
              //   display:
              //     props.user.role === "3B Manager" ||
              //     props.user.role === "Project Manager"
              //       ? "block"
              //       : "none",
              // }}
            >
              <NavLink
                to={"/admin/all_users"}
                onClick={() => props.click()}
                activeClassName={
                  props.dark_mode ? Styles.active : Styles.activeLight
                }
                className={`nav-link ${
                  props.dark_mode ? Styles.navLink : Styles.navLinkLight
                } h-100 d-flex align-items-center`}
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </Collapse>
      </div>
    )}
    </>
    )
}

export default Menu;