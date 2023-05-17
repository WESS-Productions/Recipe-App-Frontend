import { render, screen } from "@testing-library/react"
import RecipeIndex from "../pages RecipeIndex"

describe("<RecipeIndex/>", () => {
  it("renders information without error", () => {
    render(<RecipeIndex />)
    const element = screen.getByText(/Checkout some recipes/i)
    expect(element).toBeInTheDocument()
  })
})