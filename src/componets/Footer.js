import React from "react"
import { NavLink } from "react-router-dom"
import company from "../assests/company.png"



const Footer = () => {
    return (
        <>
       
        <footer className="footer-styles">©
            <a href="https://github.com/WESS-Productions"
            target="_blank"
            rel="noopener noreferrer"
            className="intext-link">
            <img src={company} className="footer-logo"/>
            </a>
            <NavLink to={'/aboutus'} className="footer-link-styling"> About us </NavLink>
            {/* <br></br> */}
            <NavLink to={'/signup'} className="footer-link-styling"> Sign up </NavLink>
            {/* <br></br> */}
            <NavLink to={'/login'} className="footer-link-styling"> Login </NavLink>
            <NavLink to={'/'} className="footer-link-styling"> Home </NavLink>
        </footer>
     
        </>
    )

}

export default Footer