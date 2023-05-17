import React from "react"
import { useParams } from "react-router-dom"





const RecipeShow = ({ recipes }) => {
    const { id } = useParams()
    console.log(recipes);
    const currentRecipe = recipes?.find((recipe) => recipe.id === +id)


    return (
        <div className="recipe-show">
            <div className="picture-section">
                <img src={currentRecipe.image} alt="Picture of food"></img>
            </div>
            <div className="details-section">
                <h2>{currentRecipe.title}</h2>
            </div>
            <div className="time-section">
                <p>Prep time: {currentRecipe.prep_time}</p>
                <p>Cook time: {currentRecipe.cook_time}</p>
            </div>
            <div className="ingredients-section">
                <h3>Ingredients</h3>
                <ul>{currentRecipe.ingredients}</ul>
            </div>
            <div className="instructions-section">
                <h3> Instructions</h3>
                <p>{currentRecipe.instructions}</p>
            </div>
            <div classNmae="show-buttons">
            <button type="button">Click Me!</button>
            <button type="button2">Click Me!</button>
                
            
            </div>

        </div>
    )

}

export default RecipeShow