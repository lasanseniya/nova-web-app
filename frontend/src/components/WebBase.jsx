import { useState } from "react";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const WebBase = () => {
  const [userName, setUserName] = useState("<user name>");
  const { user } = useContext(UserContext);
  if(user) setUserName(user.username); // set the username if user is not empty
  

  return (
    <>
      <NavBar userName={userName} />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default WebBase;
