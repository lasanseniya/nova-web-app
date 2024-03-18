import { useState } from "react";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const WebBase = () => {
  const [userName, setUserName] = useState("<user name>");

  return (
    <>
      <NavBar userName={userName} />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default WebBase;
