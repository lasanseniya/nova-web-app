import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function Layout() {
  return (
    <>
      <Outlet />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
    </>
  );
}

export default Layout;
