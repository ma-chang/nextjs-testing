/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'
import Blog from '../pages/blog-page'

it('Should render hello text', () => {
  render(<Home />)
  // screen.debug()
  expect(screen.getByText('Welcome to Nextjs')).toBeInTheDocument()
})
