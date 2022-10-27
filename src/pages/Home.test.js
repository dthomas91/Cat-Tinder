import { render, screen } from '@testing-library/react'
import Home from './Home'

describe("<Home/>", () => {
  test("renders home page for the user", () => {
    render(<Home />)
    const home = screen.getByText("")
    expect(home).toBeInTheDocument()
  })
})