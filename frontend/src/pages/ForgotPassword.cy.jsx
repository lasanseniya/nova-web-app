import ForgotPassword from "./ForgotPassword";
import { BrowserRouter as Router } from "react-router-dom";

describe("<ForgotPassword />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Router>
        <ForgotPassword />
      </Router>,
    );
  });
});
