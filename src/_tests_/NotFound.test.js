import { render, screen } from "@testing-library/react"
import NotFound from "../pages/NotFound"

describe("<NotFound />", () => {
  it("renders without crashing", () => {
    render(<NotFound />)
    const text = screen.getByText(/ERROR 404/i)
    expect(text).toBeInTheDocument()
  })

  it("renders an image with a src attribute", () => {
    render(<NotFound />)
    const image = screen.getByRole("img")
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("src")
  })
})
