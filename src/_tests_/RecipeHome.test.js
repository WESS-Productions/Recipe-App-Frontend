import { render, screen } from "@testing-library/react"

import RecipeHome from "../pages/RecipeHome"

describe("<RecipeHome/>", () => {
  it("renders information without error", () => {
    render(<RecipeHome />)
    const element = screen.getByText(/Checkout some recipes/i)
    expect(element).toBeInTheDocument()
  })
})