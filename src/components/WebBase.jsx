import { useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import "../component-css/WebBase.css";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";

const WebBase = () => {
  const [newNoteButnClicked, setNewNoteButnClicked] = useState(false);
  const [myNotesButnClicked, setMyNotesButnClicked] = useState(false);
  const [userName, setUserName] = useState("<user name>");

  function handleNewNoteClick() {
    setNewNoteButnClicked(true);
  }

  function handleMyNotesClick() {
    setMyNotesButnClicked(true);
    setNewNoteButnClicked(false);
  }

  return (
    <>
      <Sidebar />
      <NavBar userName={userName} />
    </>
  );
};

export default WebBase;
