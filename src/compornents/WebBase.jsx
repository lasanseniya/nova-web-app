import React from "react";
import logo from "../assets/logo.png";
import "../compornent-css/WebBase.css";

const WebBase = () => {
  return (
    <div>
      <div className="right-panel-container">
        <div className="left-panel-container">
          <div className="logo-section">
          <img src={logo} alt="logo" />
          <span className="logo-text">Nova</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebBase;
