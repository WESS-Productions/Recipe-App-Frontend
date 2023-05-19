import React from "react"
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const ProtectedMyRecipes = ({ recipes, currentUser, deleteRecipe }) => {

    const navigate = useNavigate()

    const handleDelete = (id) => {
        deleteRecipe(id)
        navigate('/protectedmyrecipes/')
    }

    return (
        <div className="recipe-index">
            <h2 className="recipe-index-heading"> Checkout some recipes</h2>
            <div className="recipe-list">
                {recipes.map((recipe, index) => (
                    <div className="recipe-card" key={index}>
                        <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                        <div className="recipe-details">
                            <h2 className="recipe-title">{recipe.title}</h2>
                        </div>
                        <NavLink to={`/recipeshow/${recipe.id}`}>
                        <button type="button">View Recipe</button>
                        </NavLink>
                        <div className="show-buttons">
                            <NavLink to={`/recipeedit/${recipe.id}`}>
                            <button type="button" className="button">
                                Change Recipe
                            </button>
                            </NavLink>
                            <button type="button" className="button" onClick={() => handleDelete(recipe.id)}>
                                Delete Recipe
                            </button>
                        </div>
                    </div>

                ))}
            </div>


        </div>
    )

}

export default ProtectedMyRecipes