import React from 'react'
import Layout from './Layout'

describe('<Layout />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Layout />)
  })
})