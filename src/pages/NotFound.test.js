import { render, screen } from '@testing-library/react'
import NotFound from './NotFound'
import { BrowserRouter } from 'react-router-dom'

describe("<NotFound/>", () => {
  test("renders not found page for user", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    const notFoundPage = screen.getByAltText("Christian is a cat")
    expect(notFoundPage).toBeInTheDocument()
  })
})
describe("<NotFound/>", () => {
  test("renders not found page for user", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    const notFoundPage = screen.getByAltText("Zack is a cat")
    expect(notFoundPage).toBeInTheDocument()
  })
})
describe("<NotFound/>", () => {
  test("renders not found page for user", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    const notFoundPage = screen.getByAltText("David is a cat")
    expect(notFoundPage).toBeInTheDocument()
  })
})

