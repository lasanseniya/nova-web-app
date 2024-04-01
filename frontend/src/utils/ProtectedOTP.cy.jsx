import React from "react";
import ProtectedOTP from "./ProtectedOTP";
import { BrowserRouter as Router } from "react-router-dom";

describe("<ProtectedOTP />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Router>
        <ProtectedOTP />
      </Router>,
    );
  });
});
