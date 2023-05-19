import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import YUM from "../assests/YUM.png"

const Navigation = ({ current_user }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const url = "http://localhost:3001"

  const navigate = useNavigate()

  const logout = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token") 
        setCurrentUser(null)
      })
      .catch((error) => console.log("log out errors: ", error))
  }

  const handleClick = () => {
    logout()
    navigate("/")
  }
  return (
    <>
      <Nav className="justify-content-end" >
        {current_user && (
          <>
            <NavLink to="/">
              <img src={YUM} alt="Yum Logo" />
            </NavLink>
            <NavItem className="nav-link">
              <NavLink to="/protectedmyrecipes" className="nav-link-styles">
                My Recipes
              </NavLink>
            </NavItem>
            <NavItem className="nav-link">
              <NavLink to="/recipeindex" className="nav-link-styles">
                Current Recipes
              </NavLink>
            </NavItem>
            <NavItem className="nav-link">
              <NavLink to="/newrecipe" className="nav-link-styles">
                Add A New Recipe
              </NavLink>
            </NavItem>
            <NavItem className="nav-link">
              <NavLink onClick={handleClick} to="/" className="nav-link-styles">
                Log Out
              </NavLink>
            </NavItem>
          </>
        )}
        {!current_user && (
          <>
            <NavLink to="/">
              <img src={YUM} alt="Yum Logo" className="nav-bar-logo" />
            </NavLink>
            
              <NavItem className="nav-link">
                <NavLink to="/recipeindex" className="nav-link-styles">
                  Current Recipes
                </NavLink>
              </NavItem>
              <NavItem className="nav-link">
                <NavLink to="/signup" className="nav-link-styles">
                  Sign Up!
                </NavLink>
              </NavItem>
              <NavItem className="nav-link">
                <NavLink to="/aboutus" className="nav-link-styles">
                  About us
                </NavLink>
              </NavItem>
        
          </>
        )}
      </Nav>
    </>
  )
}
export default Navigation



