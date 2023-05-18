import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Login from "../components/Login"

describe("<Login/>", () => {
  it("renders information without error", () => {
    render(<Login />)
    const element = screen.getByText(/Login here/i)
    expect(element).toBeInTheDocument()
  })
})
