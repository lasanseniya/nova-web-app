import React from 'react'
import ImageCard from './ImageCard'

describe('<ImageCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ImageCard />)
  })
})