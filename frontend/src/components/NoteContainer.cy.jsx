import React from 'react'
import NoteContainer from './NoteContainer'

describe('<NoteContainer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NoteContainer />)
  })
})