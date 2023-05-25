import { render, screen } from "@testing-library/react"
import RecipeIndex from "/Users/learnacademy/Desktop/recipe-app-frontend/src/pages/RecipeIndex.js"
import { BrowserRouter } from 'react-router-dom'


describe("<RecipeIndex/>", () => {
  it("renders information without error", () => {

    const recipes = [{ title: "Veggie Garlic Noodles",
    ingredients: "ingredients 1",
    instructions: "Instructions 1",
    vegetarian: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRDiXDCEvnuS2q47QcKG26W3RhJBDw6s9ksasyY_VfORbOADsnQ0wIubkUWRKOWB2_LY4&usqp=CAU",
    cook_time: "15 minutes",
    prep_time: "15 minutes",
    user_id: 1,
    id: 1}]
    render(
    <BrowserRouter>

      <RecipeIndex recipes={recipes} />
    
    </BrowserRouter>)
    const searchInput = screen.getAllByPlaceholderText(/enter an ingredient/i)
    const element = screen.getByText(/Yum/i)
    expect(element).toBeInTheDocument()

  })
})