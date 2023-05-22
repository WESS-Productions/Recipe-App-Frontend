import React, { useState } from "react"
import Login from "../componets/LogIn"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap"

const items = [
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    altText: "Slide 1",
    caption: " Nana's Butter Milk Flap Jacks",
    // key: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    altText: "Slide 2",
    caption: "Pizza Supreme",
    // key: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnJlYWtmYXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    altText: "Slide 3",
    caption: "Blueberry Banana French Toast",
    // key: 3,
  },
]
const RecipeHome = ({login, recipes, currentUser}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const cards = recipes.map((recipes) => {
    return(
      <Card
        style={{
          width: "20rem",
          height: "18rem"
       
        }}
      >
        <img alt="Sample" src={recipes.image} className="card-image"/>
      </Card>
   
    )
  })



  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <img className="img-carousel" src={item.src} alt={item.altText} />
        <CarouselCaption
          captionHeader={item.caption}
          className="carousel-caption"
        />
      </CarouselItem>
    )
  })

  return (
    <>
    <div className="home-page-top">
      <Login login={login}/>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...items}
        className="carousel"
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      </div>
      <div className="home-index-container">
      <div>
        <h1 className="home-title">Checkout some ideas</h1>
      </div>
      <div className="card-container">
        {cards}
      </div>
      </div>
    </>
  )
}
export default RecipeHome
