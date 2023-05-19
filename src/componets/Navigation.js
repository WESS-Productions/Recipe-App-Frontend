import React from "react"
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Collapse,
  NavbarToggler,
} from "reactstrap"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import YUM from "../assests/YUM.png"

const Navigation = ({ current_user }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const url = "http://localhost:3001"

  const navigate = useNavigate()

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

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
    <Navbar light expand="md">
      <NavbarBrand tag={Link} to="/" className="mr-auto">
        <img src={YUM} alt="Yum Logo" className="nav-bar-logo" />
      </NavbarBrand>
      <NavbarToggler onClick={toggleNav} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {current_user && (
            <>
              <NavItem className="nav-item-spacing">
                <NavLink to="/protectedmyrecipes" className="nav-link-styles">
                  My Recipes
                </NavLink>
              </NavItem>
              <NavItem className="nav-item-spacing">
                <NavLink to="/recipeindex" className="nav-link-styles">
                  Current Recipes
                </NavLink>
              </NavItem>
              <NavItem className="nav-item-spacing">
                <NavLink to="/newrecipe" className="nav-link-styles">
                  Add A New Recipe
                </NavLink>
              </NavItem>
              <NavItem className="nav-item-spacing">
                <NavLink onClick={handleClick} to="/" className="nav-link">
                  Log Out
                </NavLink>
              </NavItem>
            </>
          )}
          {!current_user && (
            <>
              <NavItem className="nav-item-spacing">
                <NavLink to="/recipeindex" className="nav-link-styles">
                  Current Recipes
                </NavLink>
              </NavItem>
              <NavItem className="nav-item-spacing">
                <NavLink to="/signup" className="nav-link-styles">
                  Sign Up
                </NavLink>
              </NavItem>
              <NavItem className="nav-item-spacing">
                <NavLink to="/aboutus" className="nav-link-styles">
                  About us
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Navigation
