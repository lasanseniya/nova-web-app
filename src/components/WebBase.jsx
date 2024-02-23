import { useState } from "react";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";

import NewNote from "./NewNote";
import MyNotes from "./MyNotes";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const WebBase = () => {
  const [userName, setUserName] = useState("<user name>");

  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/NewNote" element={<NewNote />} />
          <Route path="/Mynotes" element={<MyNotes />} />
        </Routes>
      </BrowserRouter>
      <NavBar userName={userName} />
    </>
  );
};

export default WebBase;
