import { render, screen } from "@testing-library/react"
import RecipeShow from "../pages RecipeShow"

describe("<RecipeShow/>", () => {
  it("renders information without error", () => {
    render(<RecipeShow />)
    const element = screen.getByText(/Welcome/i)
    expect(element).toBeInTheDocument()
  })
})