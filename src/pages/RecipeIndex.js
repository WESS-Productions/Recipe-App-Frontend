import React from "react"




const RecipeIndex = ( {recipes} ) => {
    console.log(recipes)
    return(
        <div className="recipe-index">
        <h2 className="recipe-index-heading"> Checkout some recipes</h2>
        <div className="recipe-list">
            {recipes.map((recipe, index) => (
                <div className="recipe-card" key={index}>
                    <img src={recipe.image} alt={recipe.title} className="recipe-image"/>
                    <div className="recipe-details">
                        <h2 className="recipe-title">{recipe.title}</h2>
                    </div>
                    <button type="button">View Recipe</button>
                </div>

            ))}
        </div>
        
      
        </div>
    )

}

export default RecipeIndex