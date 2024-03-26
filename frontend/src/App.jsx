import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Layout from "./pages/Layout.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import WebBase from "./components/WebBase.jsx";
import NewNote from "./components/NewNote.jsx";
import MyNotes from "./components/MyNotes.jsx";
import Error401 from "./pages/Error401.jsx";
import axios from "axios";
import { UserContextProvider } from "../context/userContext.jsx";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

axios.defaults.withCredentials = true;

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<LoginPage />} />,
      <Route path="/register" element={<RegisterPage />} />,
      <Route path="/dashboard" element={<WebBase />}>
        <Route index element={<NewNote />} />,
        <Route path="my-notes" element={<MyNotes />} />,
      </Route>
      <Route path="/error" element={<Error401 />} />,
    </Route>,
  ),
);

function App() {
  return (
    <>
      <UserContextProvider>
        <RouterProvider router={routes} />
      </UserContextProvider>
    </>
  );
}

export default App;
