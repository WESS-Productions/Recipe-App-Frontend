import React, { useEffect, useState} from "react";
import background from "../assests/background.png"


const IntroPage = () => {
    // const [showIntro, setShowIntro] = useState(true)

    // useEffect(() =>{
    //     const timeout = setTimeout(() =>{
    //         setShowIntro(false)
    //     }, (3000))
    //     return () => {
    //         clearTimeout(timeout)
    //     }
    // }, [])

    // const handleCloseIntro = () => {
    //     setShowIntro(false)
    //   }

    return(
        <div className="intro-page">
            <div className="intro-background">
            {/* <img src={background} alt="logo background"></img> */}
            </div>
        </div>
    )
}


export default IntroPage