import { useState } from "react";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";

import MyNotes from "./MyNotes";
import NewNote from "./NewNote";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const WebBase = () => {
  const [userName, setUserName] = useState("<user name>");

  return (
    <>
      <NavBar userName={userName} />
      <BrowserRouter>
        <Sidebar />

        <Routes>
          <Route path="/New-Note" element={<NewNote />} />
          <Route path="/My-Notes" element={<MyNotes />} />
        </Routes>
        <div className="bg-[rgb(1,20,42)] z-0 h-screen"></div>
      </BrowserRouter>
    </>
  );
};

export default WebBase;
