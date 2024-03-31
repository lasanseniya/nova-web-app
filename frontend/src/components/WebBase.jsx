import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const WebBase = () => {
  return (
    <>
      <NavBar />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default WebBase;
