import React from "react";
import NoteViewer from "./NoteViewer";

describe("<NoteViewer />", () => {
  it("renders", () => {
    // Define sample props
    const props = {
      structuredNote: "<div>Sample structured note</div>",
      cueQuestions: "<div>Sample cue questions</div>",
      summary: "<div>Sample summary</div>",
      selectedNoteId: "1",
      title: "Sample Title",
    };

    // see: https://on.cypress.io/mounting-react
    cy.mount(<NoteViewer {...props} />);
  });
});
