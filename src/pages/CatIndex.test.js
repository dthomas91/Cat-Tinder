import { render, screen } from "@testing-library/react"
import mockCats from "../mockCats"
import CatIndex from "./CatIndex"
import { BrowserRouter } from 'react-router-dom'

describe("<CatIndex />", () => {
  it("renders without crashing", () => { })
  it("renders cat cards", () => {
    const div = document.createElement("div")
    render(<BrowserRouter><CatIndex cats={mockCats} /></BrowserRouter>, div)
    mockCats.forEach((cat) => {
      const catName = screen.getByText(cat.name)
      expect(catName).toBeInTheDocument()
    })
  })
})