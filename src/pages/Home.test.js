import { render, screen } from '@testing-library/react'
import Home from './Home'

describe("<Home/>", () => {
  test("renders home page for the user", () => {
    render(<Home />)
    const home = screen.getByText("Paws here to find your love..")
    expect(home).toBeInTheDocument()
  })
})