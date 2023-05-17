import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "../componets/Footer"

describe("<Footer/>", () => {
  it("renders information without error", () => {
    render(
        <BrowserRouter>

        <Footer />
        
        </BrowserRouter>
        
        
        
      
    )
    const element = screen.getByText(/WESS Productions/i)
    expect(element).toBeInTheDocument()
  })

})