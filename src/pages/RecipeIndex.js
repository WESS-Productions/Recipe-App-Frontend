import React from "react"
import { NavLink } from "react-router-dom"
import { Card } from "reactstrap"

const RecipeIndex = ({ recipes }) => {
  console.log(recipes)
  return (
    <>
    <h1 className="header-index"><span className="Yum-index">Yum</span>my ideas</h1>
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <>
        <div className="recipe-card" key={index}>
        <h2 className="recipe-title">{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} className="card-image" />
          <div className="link-button-container">
          <NavLink to={`/recipeshow/${recipe.id}`}>
            <button className="button-login" type="button" style={{height:"2rem"}}>View Recipe</button>
          </NavLink>
          </div>
          </div>
        </>
      ))}
    </div>
    </>
  )
}

export default RecipeIndex
