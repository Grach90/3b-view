import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {FormattedMessage} from "react-intl";

import Login from "./Login";
import messages from "./messages";

import {login, getError} from "redux/sessions/sessions-actions";
import {
  changeLoginEmail,
  changeLoginPassword,
  changeLoginIsFetching,
} from "redux/auth/auth-actions";

import PropTypes from "prop-types";

const LoginContainer = props => {
  const [error, set_error] = useState("");

  useEffect(() => {
    switch (props.error) {
      case "errorForgotPassword":
        return set_error(
          <FormattedMessage {...messages.forgotPasswordError} />,
        );
      case "emptyInput":
        return set_error(<FormattedMessage {...messages.emptyInputError} />);
      case "wrongLogin":
        return set_error(<FormattedMessage {...messages.wrongLogin} />);
      default:
        return set_error(null);
    }
  }, [props.error]);

  useEffect(() => {
    return function reset() {
      props.changeLoginEmail("");
      props.changeLoginPassword("");
      props.getError("");
    };
  }, []); // eslint-disable-line

  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      email: props.email,
      password: props.password,
    };

    if (props.email !== "" && props.password !== "") {
      props.changeLoginIsFetching(true);
      return props.login(user);
    }

    props.getError("emptyInput");
  };

  const forget_password = () => {
    if (props.email === "") props.getError("errorForgotPassword");
  };

  const changeEmail = e => {
    props.getError("");
    props.changeLoginEmail(e.target.value);
  };

  const changePassword = e => {
    props.getError("");
    props.changeLoginPassword(e.target.value);
  };

  return (
    <Login
      email={props.email}
      password={props.password}
      handleSubmit={handleSubmit}
      changeEmail={changeEmail}
      changePassword={changePassword}
      error={props.error}
      is_fetching={props.is_fetching}
      dark_mode={props.dark_mode}
      forget_password={forget_password}
      error={error}
    />
  );
};

LoginContainer.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.string,
  is_fetching: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    email: state.auth.login.email,
    password: state.auth.login.password,
    error: state.session.errorLogin,
    is_fetching: state.auth.login.isFetching,
    dark_mode: state.dark_mode_reducer.mode,
  };
};

export default connect(mapStateToProps, {
  login,
  changeLoginEmail,
  changeLoginPassword,
  getError,
  changeLoginIsFetching,
})(LoginContainer);
