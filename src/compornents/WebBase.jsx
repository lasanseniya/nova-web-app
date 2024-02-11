import React, { useState } from "react";
import logo from "../assets/logo.png";
import userLogo from "../assets/userLogo.png";
import user from "../assets/user.png";
import "../compornent-css/WebBase.css";

const WebBase = () => {
  const [newNoteButnClicked, setNewNoteButnClicked] = useState(true);
  const [myNotesButnClicked, setMyNotesButnClicked] = useState(false);
  const [userName, setUserName] = useState("<user name>");
  return (
    <div>
      <div className="right-panel-container">
        <div className="left-panel-container">
          <div className="logo-section">
            <img src={logo} alt="logo" />
            <span className="logo-text">Nova</span>

            <div
              className={`new-note-btn ${newNoteButnClicked ? "clicked" : ""}`}
              onClick={() => {
                setMyNotesButnClicked(false);
                setNewNoteButnClicked(true);
              }}
            >
              New Note
            </div>
            <div
              className={`my-notes-btn ${myNotesButnClicked ? "clicked" : ""}`}
              onClick={() => {
                setMyNotesButnClicked(true);
                setNewNoteButnClicked(false);
              }}
            >
              My Notes
            </div>
            <div className="welcome-note-section">
              
              <span>Welcome,  {userName}!</span>
            <img src={user} alt="user logo" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebBase;
