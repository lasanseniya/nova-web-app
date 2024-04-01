import React from "react";
import LoginForm from "./LoginForm";
import { BrowserRouter as Router } from "react-router-dom";

describe("<LoginForm />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Router>
        <LoginForm />
      </Router>,
    );
  });
});
