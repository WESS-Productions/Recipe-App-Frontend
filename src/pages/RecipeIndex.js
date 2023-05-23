import React, { useState, Checkbox } from "react"
import { NavLink } from "react-router-dom"
import { Card } from "reactstrap"

const RecipeIndex = ({ recipes }) => {
    console.log(recipes)

    const [searchTerm, setSearchTerm] = useState("")
    const [searchVegetarian, setSearchVegetarian] = useState(false)

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleVeggieChange = () => {
        setSearchVegetarian(!searchVegetarian)
    }

    return (
        <>
            <h1 className="header-index"><span className="Yum-index">Yum</span>my ideas</h1>

            <div className="search-bar">
                <input className="search-bar-input" placeholder="Enter An Ingredient" onChange={handleChange} />
            </div>

            <div className="search-bar">
                <input style={{marginTop:"-15px"}}   type="checkbox" id="checkbox" onChange={handleVeggieChange}/>
                <label className="veg-option" style={{marginTop:"-15px"}} htmlFor="checkbox">Show only vegetarian recipes</label>
            </div>

            <div className="recipe-list">
                {recipes.filter(recipe => recipe.vegetarian === true || recipe.vegetarian === searchVegetarian).filter(recipe => recipe.ingredients.toLowerCase().includes(searchTerm.toLowerCase())).map((recipe, index) => (
                    <>
                        <div className="recipe-card" key={index}>
                            <h2 className="recipe-title">{recipe.title}</h2>
                            <img src={recipe.image} alt={recipe.title} className="card-image" />
                            <div className="link-button-container">
                                <NavLink to={`/recipeshow/${recipe.id}`}>
                                    <button className="button-login" type="button" style={{ height: "2rem" }}>View Recipe</button>
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
