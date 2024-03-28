import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import WebBase from "./components/WebBase.jsx";
import NewNote from "./components/NewNote.jsx";
import MyNotes from "./components/MyNotes.jsx";
import Error401 from "./pages/Error401.jsx";
import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

axios.defaults.withCredentials = true;

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />,
      <Route path="/login" element={<LoginPage />} />,
      <Route path="/register" element={<RegisterPage />} />,
      {/* Protected dashboard route */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<WebBase />}>
          <Route index element={<NewNote />} />,
          <Route path="my-notes" element={<MyNotes />} />,
        </Route>
      </Route>
      <Route path="/error" element={<Error401 />} />,
    </Route>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
