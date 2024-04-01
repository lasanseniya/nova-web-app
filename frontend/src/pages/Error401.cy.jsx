import Error401 from "./Error401";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

describe("<Error401 />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Router>
        <Error401 />
      </Router>,
    );
  });
});
