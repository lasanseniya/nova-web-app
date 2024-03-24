import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const WebBase = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <NavBar userName={user.username} />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default WebBase;
