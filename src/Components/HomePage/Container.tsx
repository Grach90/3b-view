import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
// import { useSelector } from "react-redux";

import messages from "./messages";

import Styles from "./styles.module.css";

import logo from "../../static/images/homePage22.png";
import logoLight from "../../static/images/homePageLight.png";

interface Iprops {
  changeMenuBool: boolean;
  changeMenu(arg: boolean): void;
}

const Welcom: React.FC<Iprops> = (props) => {
  const [smallDevice, setSmallDevice] = useState(false);
  const dark_mode: boolean = false;
  // useSelector((state) => state.dark_mode_reducer.mode);

  function handleResizeForHome(): void {
    if (window.innerWidth < 601) {
      setSmallDevice(true);
    } else {
      setSmallDevice(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResizeForHome);
    window.addEventListener("load", handleResizeForHome);
    return () => {
      window.removeEventListener("resize", handleResizeForHome);
      window.addEventListener("load", handleResizeForHome);
    };
  });

  return (
    <div className={`${Styles.homeCont} container`}>
      {!smallDevice ? (
        <div className={`${Styles.row} row mt-10`}>
          <div className={`${Styles.leftPartParent} col-lg-7`}>
            <div className="row h-100 align-items-center">
              <div className={`${Styles.leftPart} col`}>
                <div className="row">
                  <div className="col">
                    <h1
                      className={Styles.header}
                      style={{
                        color: dark_mode ? "white" : "black",
                      }}
                    >
                      <FormattedMessage {...messages.header} />
                    </h1>
                  </div>
                </div>

                <div className="row my-2">
                  <div className="col">
                    <h4
                      className={Styles.text}
                      style={{
                        color: dark_mode ? "#989898" : "black",
                      }}
                    >
                      <FormattedMessage {...messages.contentFirst} /> <br />
                      <FormattedMessage {...messages.contentSecond} />
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${Styles.rightPart} col-lg-5`}>
            <div
              className="row justify-content-end align-items-center"
              style={{ height: "92%" }}
            >
              <div className="col-10">
                <img
                  src={dark_mode ? logo : logoLight}
                  style={{ width: "100%" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="col h-100" style={{ marginTop: "15%" }}>
          <div className={`${Styles.rightPart} col-lg-5`}>
            <div
              className="row justify-content-end align-items-center"
              style={{ height: "92%" }}
            >
              <div className="row-sm-12">
                <img
                  src={dark_mode ? logo : logoLight}
                  style={{ width: "100%" }}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={`${Styles.leftPartParent} col-lg-12`}>
            <div className="row h-100 align-items-center">
              <div className={`${Styles.leftPart} col`}>
                <div className="row">
                  <div className="row">
                    <h1
                      className={Styles.header}
                      style={{
                        color: dark_mode ? "white" : "black",
                      }}
                    >
                      <FormattedMessage {...messages.header} />
                    </h1>
                  </div>
                </div>

                <div className="row my-2">
                  <div className="row">
                    <h4
                      className={Styles.text}
                      style={{
                        color: dark_mode ? "#989898" : "black",
                      }}
                    >
                      <FormattedMessage {...messages.contentFirst} /> <br />
                      <FormattedMessage {...messages.contentSecond} />
                    </h4>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="row my-2">
                    <Link to="/" className={"btn " + Styles.text_of_button}>
                      <FormattedMessage {...messages.watchVideoButton} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.changeMenuBool && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: "3",
            background: "black",
            opacity: "0.5",
            top: "0",
            left: "0",
          }}
          onClick={() => props.changeMenu(false)}
        ></div>
      )}
    </div>
  );
};

export default Welcom;
