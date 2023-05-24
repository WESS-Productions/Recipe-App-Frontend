import { render, screen } from "@testing-library/react"
import AboutUs from "../pages/AboutUs"
import { BrowserRouter } from "react-router-dom"


describe("<AboutUs />", () => {
  it("renders without crashing", () => {
    render(
    <BrowserRouter>
      <AboutUs/>
    </BrowserRouter>
    )

    const samImage = screen.getAllByAltText("sam")
    expect(samImage.length).toBeGreaterThan(0)

    const eddieImage = screen.getAllByAltText("eddie")
    expect(eddieImage.length).toBeGreaterThan(0)

    const spencerImage = screen.getAllByAltText("spencer")
    expect(spencerImage.length).toBeGreaterThan(0)

    const wagnerImage = screen.getAllByAltText("wagner")
    expect(wagnerImage.length).toBeGreaterThan(0)

    const element = screen.getByText(/Meet the YUM Team/i)
    expect(element).toBeInTheDocument()
  })
})