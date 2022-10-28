import { render, screen } from "@testing-library/react"
import CatShow from "./CatShow"
import mockCats from "../mockCats"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe("<CatShow />", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/catshow/1"]}>
        <Routes>
          <Route path="/catshow/:id" element={<CatShow cats={mockCats} />} />
        </Routes>
      </MemoryRouter>
    )
    const showRender = screen.getByText(/sunshine/i)
    expect(showRender).toHaveTextContent("sunshine and warm spots")
  })
})
