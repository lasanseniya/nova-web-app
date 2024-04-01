import LandingPage from "./Home";
import { BrowserRouter as Router } from "react-router-dom";

describe("<LandingPage />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Router>
        <LandingPage />
      </Router>,
    );
  });
});
