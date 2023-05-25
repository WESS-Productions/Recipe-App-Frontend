import { render, screen } from "@testing-library/react"
import RecipeEdit from "/Users/learnacademy/Desktop/recipe-app-frontend/src/pages/RecipeEdit.js"
import { BrowserRouter } from 'react-router-dom'

describe("<RecipeEdit />", () => {
    const currentUser = {
      id: 1,
    }
  
    const recipes = [
      {
        id: 1,
        title: "Recipe 1",
        ingredients: "Ingredient 1, Ingredient 2",
        instructions: "Step 1, Step 2",
        vegetarian: true,
        prep_time: "10 minutes",
        cook_time: "20 minutes",
        image: "https://example.com/image.jpg",
      },
    ]
    const updateRecipe = jest.fn()
    it("renders the component with the correct initial values", () => {
        render(
            <BrowserRouter>
          <RecipeEdit
            recipes={recipes}
            currentUser={currentUser}
            updateRecipe={updateRecipe}
          />
          </BrowserRouter>
        )
    
     
        
        
      })
    })