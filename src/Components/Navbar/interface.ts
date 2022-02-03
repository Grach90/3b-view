export interface ViewerProps {
  changeMenuBool: Boolean;
  language: string;
  dropdownOpen: boolean | undefined;
  userDropdownOpen: Boolean;
  windowSize: Number | Boolean;
  smallToolsDropdownOpen: Boolean;
  toggleMenuButton: Boolean;
  dark_mode: Boolean;
  toggle(): void;
  userToggle(): void;
  smallToolsToggle(): void;
  menuToggle(): void;
  user: string;
  logged_in: Boolean;
  intl: Object;
  logout: Boolean;
}
