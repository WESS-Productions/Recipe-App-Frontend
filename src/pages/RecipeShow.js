import React from "react"





const RecipeShow = ({ recipes }) => {
    return (
        <div className="recipe-show">
            <div className="picture-section">
                {/* {picture goes here} */}
                {/* <img src= alt= /> */}
            </div>
            <div className="details-section">
                <h2>Recipe title </h2>
            </div>
            <div className="time-section">
                <p>Prep time: prep time</p>
                <p>Cook time: cook time</p>
            </div>
            <div className="ingredients-section">
                <h3>Ingredients</h3>
                <ul>ingredients list </ul>
            </div>
            <div className="instructions-section">
                <h3> Instructions</h3>
                <p> Intruction section </p>
            </div>
            <div classNmae="show-buttons">
            <button type="button">Click Me!</button>
            <button type="button2">Click Me!</button>
                
            
            </div>

        </div>
    )

}

export default RecipeShow