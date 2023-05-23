import React from "react"
import instructorimage from "../assests/instructorimage.png"

const NotFound = () => {
  return (
    <>
      <div className="container">
        <div className="picture-container">
          <img src={instructorimage}></img>
          
        </div>
      </div>
      <h1 className="notfound-header">ERROR 404</h1>
      
     
    </>
  )
}

export default NotFound
