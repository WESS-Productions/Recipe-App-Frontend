import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Navigation from "../pages/Navigation"

describe("<Navigation/>", () => {
  it("renders information without error", () => {
    render(<Navigation />)
    const element = screen.getByText(/Yum/i)
    expect(element).toBeInTheDocument()
  })
})