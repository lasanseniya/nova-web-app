import React from 'react'
import NewNote from './NewNote'

describe('<NewNote />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NewNote />)
  })
})