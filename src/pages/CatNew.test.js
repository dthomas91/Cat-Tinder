import { render, screen } from '@testing-library/react'
import CatNew from './CatNew'
import { BrowserRouter } from 'react-router-dom'

describe("<CatNew/>", () => {
  beforeEach(() => {
      render(
        <BrowserRouter>
        <CatNew />
        </BrowserRouter>
        )
      })
  test("renders the catnew page for the user", () => {
    const CatNewHeading = screen.getByText(/Add a New Cat/i)
    expect(CatNewHeading).toHaveTextContent("Add a New Cat")
  })
  test("has a form with entries for name, age, enjoys, image", () => {
    const nameLabel = screen.getByText(/name/i)
    screen.debug()
    expect(nameLabel.getAttribute("for")).toEqual("name")

    const ageLabel = screen.getByText("Age")
    screen.debug(ageLabel)
    expect(ageLabel.getAttribute("for")).toEqual("age")
  }) 
})