import React from 'react'
import "./Hero.css"
import Card from '../Card/Card'
import Images1 from "../../assets/images1.jpeg";
import Images2 from "../../assets/Images2.jpg";
import images3 from "../../assets/images3.jpeg";

function Hero() {
  return (
    <div className="hero">
      <Card name="Skyline Villa" price="Rs. 1.8 CR" imageUrl={Images1}/>
      <Card name="Royal Palms Suite" price="Rs. 2.5 CR" imageUrl={Images2}/>
      <Card name="Greenfield Estate" price="Rs. 3.0 CR" imageUrl={images3}/>
    </div>
  )
}

export default Hero