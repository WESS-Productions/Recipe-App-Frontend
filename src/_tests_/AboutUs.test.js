import { render, screen } from "@testing-library/react"
import AboutUs from "../pages/AboutUs"
import { BrowserRouter } from "react-router-dom"

describe("<AboutUs/>", () => {
  it("renders information without error", () => {
    render(
        
        <AboutUs />
        
        
      
    )
    const element = screen.getByText(/About the team/i)
    expect(element).toBeInTheDocument()
  })

})