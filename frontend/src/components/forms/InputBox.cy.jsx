import React from 'react'
import InputBox from './InputBox'

describe('<InputBox />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<InputBox />)
  })
})