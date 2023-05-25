import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ProtectedMyRecipes from "../pages/ProtectedMyRecipes"

describe("<ProtectedMyRecipes/>", () => {
  it("renders information without error", () => {
    const currentUser = {
      id: 1,
    }
  
    const recipes = [
      {
        id: 1,
        user_id: 1,
        title: "Recipe 1",
        image: "https://example.com/image.jpg",
      },
    ]
    const deleteRecipe = jest.fn()

    render(
      <BrowserRouter>
        <ProtectedMyRecipes
          recipes={recipes}
          currentUser={currentUser}
          deleteRecipe={deleteRecipe}
        />
      </BrowserRouter>
    )

    const element = screen.getByText(/Yum/i)
    expect(element).toBeInTheDocument()
  })
})