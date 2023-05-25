import { render, screen } from "@testing-library/react"
import RecipeShow from "/Users/learnacademy/Desktop/recipe-app-frontend/src/pages/RecipeShow.js"
import { BrowserRouter } from "react-router-dom"

describe("<RecipeShow/>", () => {
  const recipes = [
    {
      id: 1,
      title: "Recipe 1",
      image: "https://example.com/image1.jpg",
      prep_time: "30 minutes",
      cook_time: "1 hour",
      ingredients: "Ingredient 1, Ingredient 2",
      instructions: "Step 1, Step 2",
    }
  ]
  const currentUser = {
    id: 123,
    favorites: ["1"]
  }
  it("renders information without error", () => {

    <BrowserRouter>
    render(<RecipeShow recipes={recipes} currentUser={currentUser}  />)
    </BrowserRouter>
    
  })
})