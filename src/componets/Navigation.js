import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"



const Navigation = ({ current_user }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const url = "http://localhost:3001"

    const navigate = useNavigate()

    const logout = () => {
        fetch(`${url}/logout`, {
          headers: {
            "Content-Type": 'application/json',
            "Authorization": localStorage.getItem("token") //retrieve the token 
          },
          method: 'DELETE'
        })
        .then(payload => {
        localStorage.removeItem("token")  // remove the token
        setCurrentUser(null)
      })
      .catch(error => console.log("log out errors: ", error))
      }
    

    const handleClick = () => {
        logout()
        navigate('/')
      }
      return(
        <>
            <Nav className="nav">
                {current_user && (
                    <>

                        <NavLink to = '/'> 
               {/* <img our logo asset will go here */}
                        </NavLink>
                        <NavItem>
                            <NavLink to="/protectedmyrecipes" className="nav-link">
                                My Recipes
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/recipeindex" className="nav-link">
                                Current Recipes
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/newrecipe" className="nav-link">
                                Add A New Recipe
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={handleClick} to="/" className="nav-link">
                                Log Out
                            </NavLink>
                        </NavItem>
                    </>
                )}
                {!current_user && (
                    <>
                        <NavLink to = '/'> 
                            {/* our logo asset will go here */}
                        </NavLink>
                        <NavItem>
                            <NavLink to="/recipeindex" className="nav-link">
                                See Current Recipes
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/signup" className="nav-link">
                                Sign Up!
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  to="/aboutus" className="nav-link">
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