import React, { useEffect } from "react"
import Eddie from "../assests/eddie.png"
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
        <h1>Meet the YUM Team.</h1>
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
              <p>Hi, Thank you for checking out our webpage and we hope you enjoyed YUM! During the course of development for YUM I was the lead for Tech and version control. The day-to-day in this role consited of coding guidance and ensuring approraite merging to our GitHub Repo. If you have any questions dont hesitate to reach out on LinkedIN. Also you can checkout all the team members Github's at the bottom of the page! </p>
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
              <img src={Eddie} alt="eddie" className="eddie"/>
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
