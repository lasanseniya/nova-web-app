import React from "react";
import RegisterPage from "./RegisterPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("<RegisterPage />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Router>
        <RegisterPage />
      </Router>,
    );
  });
});
