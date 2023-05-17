import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ProtectedMyRecipes from "../pages/ProtectedMyRecipes"

describe("<protectedmyrecipes/>", () => {
  it("renders information without error", () => {
    render(<ProtectedMyRecipes />)
    const element = screen.getByText(/Welcome/i)
    expect(element).toBeInTheDocument()
  })
})