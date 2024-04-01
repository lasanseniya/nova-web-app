import React from "react";
import WebBase from "./WebBase";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

describe("<WebBase />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Router>
        <WebBase />
      </Router>,
    );
  });
});
