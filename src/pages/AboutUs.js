import React, { useEffect } from "react"
import eddie from "../assests/eddie.png"
import sam from "../assests/sam.png"
import spencer from "../assests/spencer.png"
import wags from "../assests/wags.png"

const AboutUs = () => {
  useEffect(() => {
    const reveal = () => {
      let reveals = document.querySelectorAll('.reveal')
      for(let i = 0; i < reveals.length; i++){
        let windowheight = window.innerHeight
        let revealtop = reveals[i].getBoundingClientRect().top
        let revealpoint = 150
        if(revealpoint < windowheight - revealtop){
          reveals[i].classList.add('active')
        }
        else{
          reveals[i].classList.remove('active')
        }
      }
    }
    window.addEventListener("scroll", reveal)

    return () => {
      window.removeEventListener("scroll", reveal)
    }
  }, [])
  return (
    <>  
      <section>
        <span className="about-us-spans">M</span>
        <span className="about-us-spans">e</span>
        <span className="about-us-spans">e</span>
        <span className="about-us-spans">t</span>
        <span className="about-us-spans-period">.</span>
        <span className="about-us-spans"></span>
        <span className="about-us-spans">t</span>
        <span className="about-us-spans">h</span>
        <span className="about-us-spans">e</span>
        <span className="about-us-spans-period"></span>
        <div className="dark-logo-container">
          <image className="dark-logo"/> 
        </div>
      <span className="about-us-spans">T</span>
      <span className="about-us-spans">e</span>
      <span className="about-us-spans">a</span>
      <span className="about-us-spans">m</span>
      </section>
      <section>
        <div className="container reveal">
          <h2>Sam Saenz</h2>
          <div className="cards">
            <div className="text-card">
              <h3></h3>
              <a href= "https://www.linkedin.com/in/samuelsaenz/"
            target="_blank"
            rel="noopener noreferrer"
            className="intext-link">
              <img src={sam} alt="sam"/>
              </a>
            </div>
            <div className="text-card">
              <h3>Tech Lead</h3>
              <p>Thank you for checking out our webpage, we hope you enjoy our project. As the tech lead during the development of YUM, I was in charge of version control and git management. My daily responsibilities in this role consisted of providing coding guidance for the team and managing use of our Github repository. If you would like to reach out, you can contact me on LinkedIN. The Github profile for each team member can also be found at the bottom of this page.</p>
            </div>
           
          </div>
        </div>
      </section>
      <section>
        <div className="container reveal">
          <h2>Eddie Carrion</h2>
          <div className="cards">
            <div className="text-card">
              <h3></h3>
              <a href="https://www.linkedin.com/in/eduviges-carrion/"
            target="_blank"
            rel="noopener noreferrer"
            className="intext-link">
              <img src={eddie} alt="eddie" className="eddie"/>
              </a>
            </div>
            <div className="text-card">
              <h3>Project Manager</h3>
              <p>Thank you for checking out our webpage YUM! During the production phase I was the Project Manager. My responsibilities consisted of maintaining internal communication with my team members and maintaining our project management board. Yum was a fun application to create and I am grateful I was able to contribute alongside my team. Feel free to reach out to me via LinkedIn if you have any questions.</p>
            </div>
            
          </div>
        </div>
      </section>
      <section>
        <div className="container reveal">
          <h2>Wagner Gonzalez</h2>
          <div className="cards">
            <div className="text-card">
              <h3></h3>
              <img src={wags} alt="wagner"/>
            </div>
            <div className="text-card">
              <h3>Product Manager</h3>
              <p>Lorem ipsum dolor sit amet, consectttur</p>
            </div>
          
          </div>
        </div>
      </section>
      <section>
        <div className="container reveal">
          <h2>Spencer Johnson</h2>
          <div className="cards">
            <div className="text-card">
              <h3></h3>
              <a  href="https://github.com/Spencerj1297"
            target="_blank"
            rel="noopener noreferrer"
            className="intext-link" >
              <img src={spencer} alt="spencer"/>
              </a>
            </div>
            <div className="text-card">
              <h3>UI /UX</h3>
              <p> Hi, Im spencer, thank you for taking the time to check out our creation! As the Lead UI /UX programmer I hope you enjoyed the look and design of YUM. My goal was to include a color scheme and features that would enhance interaction with our awesome platfrom. If you have any questions dont hesitate to reach out on LinkedIN. Also you can checkout all the team members Github's at the bottom of the page!If you have any questions dont hesitate to reach out on LinkedIN. Also you can checkout all the team members Github's at the bottom of the page!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default AboutUs
