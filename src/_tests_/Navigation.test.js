import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Navigation from "../componets/Navigation"

describe("<Navigation/>", () => {
  it("renders information without error", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )

    const currentRecipesLink = screen.getByRole("link", { name: /Current Recipes/i })
    const signUpLink = screen.getByRole("link", { name: /Sign Up/i })
    const aboutUsLink = screen.getByRole("link", { name: /About Us/i })

    expect(aboutUsLink).toBeInTheDocument()
    expect(signUpLink).toBeInTheDocument()
    expect(currentRecipesLink).toBeInTheDocument()
  })

  it('Navigation has clickable links', () => {
    render(
      <BrowserRouter>
        <Navigation/>
      </BrowserRouter>
    )
    
    userEvent.click(screen.getByText("Current Recipes", { exact: false }))
    userEvent.click(screen.getByText("Sign Up", { exact: false }))
 
    expect(screen.getByText("Current Recipes")).toBeInTheDocument()
    expect(screen.getByText("Sign Up")).toBeInTheDocument()
    
  })
})
