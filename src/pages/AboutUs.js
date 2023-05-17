import React from "react"
import eddie from "../assests/eddie.png"
import sam from "../assests/sam.png"
import spencer from "../assests/spencer.png"

const AboutUs = () => {
  return (
    <>
      <h1 id="about-us-header">Meet the team</h1>
      <div className="picture-boxes">
        <h3>Tech Lead</h3>
        <img src={sam} alt="Sam" />
        <p id="sam-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Click{" "}
          <a>here</a> to see my GitHub!
        </p>
      </div>
      <div className="picture-boxes" id="align-left">
        <h3>Project Manager</h3>
        <img src={eddie} alt="eddie" />
        <p id="eddie-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      <div className="picture-boxes">
        <h3>UX/UI Lead</h3>
        <img src={spencer} alt="spencer" />
        <p id="sam-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Click{" "}
          <a
            href="https://github.com/Spencerj1297"
            target="_blank"
            rel="noopener noreferrer"
            className="intext-link"
          >
            here
          </a>{" "}
          to see my GitHub!
        </p>
      </div>
    </>
  )
}

export default AboutUs
