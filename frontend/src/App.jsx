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

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />,
      <Route path="/login" element={<LoginPage />} />,
      <Route path="/register" element={<RegisterPage />} />,
      <Route path="/dashboard" element={<WebBase />}>
        <Route index element={<NewNote />} />,
        <Route path="my-notes" element={<MyNotes />} />,
      </Route>
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
