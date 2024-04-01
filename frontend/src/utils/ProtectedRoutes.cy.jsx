import React from "react";
import ProtectedRoutes from "./ProtectedRoutes";
import { BrowserRouter as Router } from "react-router-dom";

describe("<ProtectedRoutes />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Router>
        <ProtectedRoutes />
      </Router>,
    );
  });
});
