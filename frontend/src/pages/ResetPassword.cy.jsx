import React from "react";
import ResetPassword from "./ResetPassword";
import { BrowserRouter as Router } from "react-router-dom";

describe("<ResetPassword />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Router>
        <ResetPassword />
      </Router>,
    );
  });
});
