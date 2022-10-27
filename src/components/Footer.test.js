import { render, screen } from '@testing-library/react'
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'

describe("<Footer/>", () => {
  test("renders the footer for users", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const footer = screen.getByText("| CAT TINDER 2022 | CREATED BY ZACK ROHDE, DAVID THOMAS, AND CHRISTIAN MACIAS")
    expect(footer).toBeInTheDocument()
  })
})