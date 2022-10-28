import { render, screen } from "@testing-library/react"
import mockCats from "../mockCats"
import CatIndex from "./CatIndex"

describe("<CatIndex />", () => {
  it("renders without crashing", () => {})
  it("renders cat cards", () => {
  const div = document.createElement("div")
  render(<CatIndex cats={mockCats} />, div)
  mockCats.forEach((cat) => {
    console.log("CAT", cat.name)
    const catName = screen.getByText(cat.name)
    expect(catName).toBeInTheDocument()
  })
  })
})