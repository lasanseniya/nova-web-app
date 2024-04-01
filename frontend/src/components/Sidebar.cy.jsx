import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import Sidebar from "./Sidebar";

describe("<Sidebar />", () => {
  it("renders", () => {
    // Wrap Sidebar component with Router
    cy.mount(
      <Router>
        <Sidebar />
      </Router>,
    );
  });
});
