import React from "react"
import { useParams } from "react-router-dom"

const RecipeShow = ({ recipes, currentUser, updateUser }) => {
  const { id } = useParams()
  console.log(recipes)
  const currentRecipe = recipes?.find((recipe) => recipe.id === +id)

  const handleClick = () => {
    if(currentUser.favorites.includes(currentRecipe.id.toString())){
      currentUser.favorites.splice(currentUser.favorites.indexOf(currentRecipe.id.toString()), 1)
      updateUser(currentUser, currentUser.id)
    }
    else{
      currentUser.favorites.push(currentRecipe.id.toString())
      updateUser(currentUser, currentUser.id)
    }
  }

  return (

    <>
      
      <style>
        {`

        #backgroundDiv {
          background-image: url('${currentRecipe?.image}');
          background-size: cover;
          background-position: center center;
        }
        `}
      </style>
      <div >
        {currentRecipe && (<>
      <div className="details-section">
        <h2 style={{fontSize:"6rem"}}>{currentRecipe.title}</h2>
      </div>
      <div className="container-show">
        <div className="picture-section" id="backgroundDiv">
          <div className="time-section">
            <p>Prep time: {currentRecipe.prep_time}</p>
            <p>Cook time: {currentRecipe.cook_time}</p>
          </div>
        </div>

        <div className="ingredients-section">
          <h3 style={{ textDecoration: "underline", marginRight:"12rem"}} id="headers-show">
            Ingredients
          </h3>
          <p style={{marginRight:"12rem", backgroundColor: "#fff59ec1"}}>{currentRecipe.ingredients}</p>
        </div>
      </div>
      <div className="instructions-section">
        <h3 style={{ textDecoration: "underline" }} id="headers-show">
          {" "}
          Instructions
        </h3>
        <p style={{backgroundColor: "#fff59ec1"}}>{currentRecipe.instructions}</p>
      </div>
      {currentUser && (
            <button onClick={handleClick}>Favorite</button>
          )}
      </>
)}
      </div>
    </>
  )
}

export default RecipeShow
