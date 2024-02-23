import { useState } from "react";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";

const WebBase = () => {
  const [userName, setUserName] = useState("<user name>");

  return (
    <>
      <Sidebar />
      <NavBar userName={userName} />
    </>
  );
};

export default WebBase;
