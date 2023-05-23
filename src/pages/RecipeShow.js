import React from "react"
import { useParams } from "react-router-dom"

const RecipeShow = ({ recipes }) => {
  const { id } = useParams()
  console.log(recipes)
  const currentRecipe = recipes?.find((recipe) => recipe.id === +id)

  return (

    <>
      
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant&family=Montserrat:wght@300&family=Mulish:wght@600;800&family=Roboto:wght@700&display=swap');
        #backgroundDiv {
          background-image: url('${currentRecipe?.image}');
          background-size: cover;
          background-position: center center;
        }
        `}
      </style>
      <div className="container-show">
        {currentRecipe && (<>
      <div className="details-section">
        <h2>{currentRecipe.title}</h2>
      </div>
      <div>
        <div className="picture-section" id="backgroundDiv">
          <div className="time-section">
            <p>Prep time: {currentRecipe.prep_time}</p>
            <p>Cook time: {currentRecipe.cook_time}</p>
          </div>
        </div>

        <div className="ingredients-section">
          <h3 style={{ textDecoration: "underline"}} id="headers-show">
            Ingredients
          </h3>
          <ul>{currentRecipe.ingredients}</ul>
        </div>
      </div>
      <div className="instructions-section">
        <h3 style={{ textDecoration: "underline" }} id="headers-show">
          {" "}
          Instructions
        </h3>
        <p>{currentRecipe.instructions}</p>
      </div>
      </>
)}
      </div>
    </>
  )
}

export default RecipeShow
