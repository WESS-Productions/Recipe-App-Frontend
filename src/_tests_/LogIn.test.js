import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import LogIn from "../pages/LogIn"

describe("<LogIn/>", () => {
  it("renders information without error", () => {
    render(<LogIn />)
    const element = screen.getByText(/Login here/i)
    expect(element).toBeInTheDocument()
  })
})
