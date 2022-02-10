import React from "react";
import { FormattedMessage } from "react-intl";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";

import messages from "./messages";

import Styles from "./login.module.css";

import logo from "../../static/images/undraw_dev_productivity_umsq.png";

const Login = (props) => {
  const [iconChacked, setIconChacked] = useState({ chacked: true });
  const dark_mode = false;
  const state = useSelector((state) => state);
  console.log("state",state.LoginReducer);

  return (
    <div className="h-100">
      <div className="row h-100">
        <div
          className="col-lg-4 m-auto align-content-center"
          style={{ height: "85%", minHeight: "715px" }}
        >
          <div className="row">
            <div className="col d-flex justify-content-lg-center">
              <img src={logo} className={"m-auto " + Styles.signinImg} alt="" />
            </div>
          </div>

          <div className="row">
            <h2
              className={"m-auto py-5 " + Styles.header}
              style={{
                color: dark_mode ? "white" : "black",
              }}
            >
              <FormattedMessage {...messages.header} />
            </h2>
          </div>

          <div className="row">
            <form className="m-auto w-100" onSubmit={props.handleSubmit}>
              <div className={"m-auto " + Styles.formContnet}>
                <label
                  htmlFor="exampleInputEmail1"
                  style={{
                    color: `${
                      props.error ? "#FF4141" : dark_mode ? "#C4C4C4" : "black"
                    } `,
                  }}
                >
                  {props.error ? (
                    props.error
                  ) : (
                    <FormattedMessage {...messages.emailInput} />
                  )}
                </label>

                <div className="form-group" style={{ marginBottom: "0.5rem" }}>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${
                      dark_mode ? Styles.text : Styles.textLight
                    }`}
                    style={{ fontSize: "14px" }}
                    id="exampleInputEmail1"
                    value={props.email}
                    onChange={props.changeEmail}
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    style={{ color: dark_mode ? "#C4C4C4" : "black" }}
                  >
                    <FormattedMessage {...messages.passwordInput} />
                  </label>
                  <div className={Styles.inputContainer}>
                    <input
                      type={iconChacked.chacked ? "password" : "text"}
                      className={`form-control ${
                        dark_mode ? Styles.text : Styles.textLight
                      }`}
                      name="password"
                      id="exampleInputPassword1"
                      value={props.password}
                      onChange={props.changePassword}
                    />
                    {iconChacked.chacked ? (
                      <FaEyeSlash
                        className={Styles.iconAye}
                        onClick={() => setIconChacked({ chacked: false })}
                      />
                    ) : (
                      <FaEye
                        className={Styles.iconAye}
                        onClick={() => setIconChacked({ chacked: true })}
                      />
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col-5">
                    <button
                      type="submit"
                      className={"btn " + Styles.subBtn}
                      disabled={props.is_fetching}
                    >
                      <span>
                        <FormattedMessage {...messages.signInButton} />
                      </span>
                    </button>
                  </div>

                  <div className="col-7">
                    <div className="row justify-content-end">
                      <div className="col d-flex justify-content-end">
                        <a
                          href={
                            props.email === ""
                              ? "#"
                              : `https://support.icngroup.eu/ICNAccountManager/pages/passwordmanager/changepassword?request=1&key=${props.email}`
                          }
                          className={
                            dark_mode ? Styles.signupRef : Styles.signupRefLight
                          }
                          style={{ textDecoration: "none" }}
                          onClick={() => props.forget_password()}
                        >
                          <FormattedMessage {...messages.forgotPassword} />{" "}
                          &#8594;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
