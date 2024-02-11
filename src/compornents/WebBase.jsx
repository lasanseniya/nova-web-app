import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../compornent-css/WebBase.css";

const WebBase = () => {
  const [newNoteButnClicked, setNewNoteButnClicked] = useState(true);
  const [myNotesButnClicked, setMyNotesButnClicked] = useState(false);
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebBase;
