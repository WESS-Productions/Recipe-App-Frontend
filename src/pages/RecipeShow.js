import React from "react"

const RecipeShow = ({ recipes }) => {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Cormorant&family=Montserrat:wght@300&family=Mulish:wght@600;800&family=Roboto:wght@700&display=swap');
      </style>
      <div>
        <div className="details-section">
          <h2> Mom's Chicken tortilla soup ! </h2>
        </div>
        <div className="picture-section">
          {/* {picture goes here} */}
          {/* <img src= alt= /> */}
          <div className="time-section">
            <p>Prep time: prep time</p>
            <p>Cook time: cook time</p>
          </div>
        </div>

        <div className="ingredients-section">
          <h3 style={{ textDecoration: "underline" }} id="headers-show">Ingredients</h3>
          <ul>ingredients list </ul>
        </div>
      </div>

      <div className="instructions-section">
        <h3 style={{ textDecoration: "underline" }} id="headers-show"> Instructions</h3>
        <p> Intruction section </p>
      </div>
      <div className="show-buttons">
        <button className="button">Change Recipe</button>
        <button className="button">Delete Recipe</button>
      </div>
    </>
  )
}

export default RecipeShow
