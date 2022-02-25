import { GlobalAction } from "../../redux/global/globalTypes";

export interface ViewerIProps {
  changeMenuBool: boolean;
  language: string;
  dropdownOpen: boolean | undefined;
  userDropdownOpen: boolean;
  windowSize: Number | boolean;
  smallToolsDropdownOpen: boolean;
  toggleMenuButton: boolean;
  dark_mode: boolean;
  user: string;
  logged_in: boolean;
  intl: Object;
  logout: boolean;
  pathname: string;
  logout_Is_fetching: boolean;
  toggle(): void;
  userToggle(): void;
  smallToolsToggle(): void;
  menuToggle(): void;
  set_dark_mode(mode: boolean): GlobalAction;
  changeLanguage(): GlobalAction;
}

export interface MenuIprops {
  dark_mode: boolean;
  changeMenuBool: boolean;
  dropdownOpen: boolean | undefined;
  toggleMenuButton: boolean;
  logout: boolean;
  menuToggle(): void;
}

export interface LogositeIProps {
  logout: boolean;
  dark_mode: boolean;
}

export interface ControlPanelToggleIProps {
  smallToolsDropdownOpen: boolean;
  dark_mode: boolean;
  userDropdownOpen: boolean;
  dropdownOpen: boolean | undefined;
  language: string;
  logout_Is_fetching: boolean;
  smallToolsToggle(): void;
  set_dark_mode(mode: boolean): GlobalAction;
  toggle(): void;
  changeLanguage(): GlobalAction;
}

export interface ControlPanelIProps {
  userDropdownOpen: boolean;
  dark_mode: boolean;
  dropdownOpen: boolean | undefined;
  language: string;
  logout_Is_fetching: boolean;
  userToggle(): void;
  toggle(): void;
  changeLanguage(): GlobalAction;
  set_dark_mode(mode: boolean): GlobalAction;
}
