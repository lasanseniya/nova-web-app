import React from "react";
import RegisterForm from "./RegisterForm";
import { BrowserRouter as Router } from "react-router-dom";

describe("<RegisterForm />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Router>
        <RegisterForm />
      </Router>,
    );
  });
});
