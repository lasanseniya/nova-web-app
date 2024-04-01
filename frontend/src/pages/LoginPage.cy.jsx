import React from "react";
import LoginPage from "./LoginPage";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

describe("<LoginPage />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Router>
        <LoginPage />
      </Router>,
    );
  });
});
