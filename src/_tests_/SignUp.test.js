import { render, screen } from "@testing-library/react"
import SignUp from "../pages SignUp"

describe(" SignUp/>", () => {
  it("renders information without error", () => {
    render(<SignUp />)
    const element = screen.getByText(/Sign Up Here/i)
    expect(element).toBeInTheDocument()
  })
})