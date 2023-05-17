import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "../componets/Header"

describe("<Header/>", () => {
  it("renders information without error", () => {
    render(
        <BrowserRouter>

        <Header />
        
        </BrowserRouter>
        
        
        
      
    )
    const element = screen.getByText(/Yum/i)
    expect(element).toBeInTheDocument()
  })

})