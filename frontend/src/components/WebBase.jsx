import { useState } from "react";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";

const WebBase = () => {
  const [userName, setUserName] = useState("<user name>");

  return (
    <>
      <NavBar userName={userName} />
      <Sidebar />
    </>
  );
};

export default WebBase;
