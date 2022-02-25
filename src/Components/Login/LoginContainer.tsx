import React, { useEffect, useState, ChangeEvent } from "react";
// import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import * as Actions from "../../redux/login/LoginActions";
import { useActions } from "../../hooks/useActions";
import Login from "./Login";
// import messages from "./messages";

const LoginContainer: React.FC = (props) => {
  const dispatch = useDispatch();
  const { email, password, isFetching } = useTypedSelector(
    (state) => state.loginState.login
  );
  const { login, getError } = useActions();
  const { dark_mode } = useTypedSelector((state) => state.globalState);
  // const { errorLogin } = useTypedSelector((state) => state.sessionState);
  // const [error, set_error] = useState("");
  // useEffect(() => {
  //   switch (errorLogin) {
  //     case "errorForgotPassword":
  //       return set_error(
  //         <FormattedMessage {...messages.forgotPasswordError} />
  //       );
  //     case "emptyInput":
  //       return set_error(<FormattedMessage {...messages.emptyInputError} />);
  //     case "wrongLogin":
  //       return set_error(<FormattedMessage {...messages.wrongLogin} />);
  //     default:
  //       return set_error(null);
  //   }
  // }, [errorLogin]);

  useEffect(() => {
    return function reset() {
      dispatch(Actions.changeLoginEmail(""));
      dispatch(Actions.changeLoginPassword(""));
      getError("");
    };
  }, []); // eslint-disable-line

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    if (email !== "" && password !== "") {
      // props.changeLoginIsFetching(true);
      login(user);
      return;
    }

    getError("emptyInput");
  };

  const forget_password = () => {
    if (email === "") getError("errorForgotPassword");
  };

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    getError("");
    dispatch(Actions.changeLoginEmail(e.target.value));
  };

  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    getError("");
    dispatch(Actions.changeLoginPassword(e.target.value));
  };

  return (
    <Login
      email={email}
      password={password}
      handleSubmit={handleSubmit}
      changeEmail={changeEmail}
      changePassword={changePassword}
      // error={error}
      isFetching={isFetching}
      dark_mode={dark_mode}
      forget_password={forget_password}
      // error={error}
    />
  );
};

// const mapStateToProps = (state: IMapState) => {
//   return {
//     email: state.auth,
//     password: state.auth.login.password,
//     error: state.session.errorLogin,
//     is_fetching: state.auth.login.isFetching,
//     dark_mode: state.dark_mode_reducer.mode,
//   };
// };

// export default connect(mapStateToProps, {
//   // login,
//   changeLoginEmail,
//   changeLoginPassword,
//   // getError,
//   changeLoginIsFetching,
// })(LoginContainer);

export default LoginContainer;
