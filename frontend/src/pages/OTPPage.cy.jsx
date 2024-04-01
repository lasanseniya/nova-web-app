import React from "react";
import OTPPage from "./OTPPage";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

describe("<OTPPage />", () => {
  it("renders", () => {
    // Wrap Sidebar component with Router
    cy.mount(
      <Router>
        <OTPPage />
      </Router>,
    );
  });
});
