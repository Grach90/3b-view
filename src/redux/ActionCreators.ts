import * as GlobalActionCreators from "./global/globalActions";
import * as SessionActionCreators from "./sessions/SessionsActions";
import * as LoginActionCreators from "./login/LoginActions";

export default {
  ...GlobalActionCreators,
  ...SessionActionCreators,
  ...LoginActionCreators,
};
