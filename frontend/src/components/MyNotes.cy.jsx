import React from 'react'
import MyNotes from './MyNotes'

describe('<MyNotes />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MyNotes />)
  })
})