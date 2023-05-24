import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import SignUp from "/Users/learnacademy/Desktop/recipe-app-frontend/src/componets/SignUp.js"

describe("<SignUp/>", () => {
  it("renders information without error", () => {
    render(
    <BrowserRouter>
    <SignUp />
    </BrowserRouter>
    )
    const emailInput = screen.getByPlaceholderText('email')
    expect(emailInput).toBeInTheDocument()
    
  })

  it('renders password input', () => {
    render(
      <BrowserRouter>
      <SignUp />
      </BrowserRouter>
    )
    const passWordInput = screen.queryAllByPlaceholderText('password')
    expect(passWordInput).toHaveLength(2)
  })
})