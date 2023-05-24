import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import LogIn from "/Users/learnacademy/Desktop/recipe-app-frontend/src/componets/LogIn.js"

describe("<LogIn/>", () => {
  it("renders information without error", () => {
    render(
    <BrowserRouter>
    <LogIn />
    </BrowserRouter>
    )
    const loginButton = screen.getByRole("button", { name: "login"})
    expect(loginButton).toBeInTheDocument()
  

    const emailInput = screen.getByPlaceholderText('Enter your email')
    expect(emailInput).toBeInTheDocument()
    const passwordInput = screen.getByPlaceholderText('Enter your password')
    expect(passwordInput).toBeInTheDocument()
  })
})
