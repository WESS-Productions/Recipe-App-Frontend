import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "../pages/NotFound"

describe("<NotFound/>", () => {
  it("renders information without error", () => {
    render(<NotFound />)
    const element = screen.getByText(/Sorry No Recipes/i)
    expect(element).toBeInTheDocument()
  })
})