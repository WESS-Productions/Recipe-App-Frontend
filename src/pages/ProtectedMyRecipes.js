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
        <>
        <section className="protected-index-background">
        <div className="header-container">
        <h1 className="header-pro-index">
          <span className="Yum-index">Yum</span>my ideas
        </h1>
        </div>
        <div className="recipe-list">
          {recipes.filter((recipe) => (recipe.user_id === currentUser.id)).map((recipe, index) => (
            <>
              <div className="recipe-card-protected" key={index}>
                <NavLink to={`/recipeshow/${recipe.id}`}>
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="card-image-protected"
                  />
                </NavLink>
                <div className="text-overlay">
                  <h2 className="recipe-protected-title">{recipe.title}</h2>
                </div>
                <div className="link-button-container-protected">
                  <div className="show-buttons">
                    <NavLink to={`/recipeedit/${recipe.id}`}>
                      <button type="button" className="button-protected">
                        Change Recipe
                      </button>
                    </NavLink>
                    <button
                      type="button"
                      className="button-protected"
                      onClick={() => handleDelete(recipe.id)}
                    >
                      Delete Recipe
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
    )

}

export default ProtectedMyRecipes