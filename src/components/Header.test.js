import { render, screen } from '@testing-library/react'
import Header from './Header'

describe("<Header/>", () => {
  test("renders the header for users", () => {
    render(<Header />)
    const element = screen.getByText("Tab 1")
    expect(element).toBeInTheDocument()
  })

  test("renders the header for users", () => {
    render(<Header />)
    const element = screen.getByText("Tab 2")
    expect(element).toBeInTheDocument()
  })

  test("renders the header for users", () => {
    render(<Header />)
    const element = screen.getByText("Tab 3")
    expect(element).toBeInTheDocument()
  })

  test("renders the header for users", () => {
    render(<Header />)
    const element = screen.getByText("Tab 4")
    expect(element).toBeInTheDocument()
  })

  test("renders the header for users", () => {
    render(<Header />)
    const element = screen.getByAltText("Cat Tinder Logo")
    expect(element).toBeInTheDocument()
  })
})
