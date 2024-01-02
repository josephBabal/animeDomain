"use client"

import { useState, useEffect } from "react"

const HeroSlide = () => {
  const images = ['/hero-image-1.jpg', '/hero-image-2.jpg']
  const [currentImage, setCurrentImage] = useState(0);

  const next = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);


  return (
    <div className="slides">

    {/* <div className="arrow leftArrow" onClick={prev}>
      <p> left </p>
    </div> */}

    <div className={`slide`}>
        <img
          src={images[currentImage]}
          alt="Hero image illustration by Vanessa Ramirez Medina"
          className="slide-image"
        />

        <div className="absolute top-[40%] md:top-1/3 left-[10%] w-[40%] ">
          <h1 className=" text-2xl  md:text-5xl lg:text-6xl text-white lg:max-w-lg font-bold ">
            Explore The <span className="mainGradient"> Domain</span> of
            Anime
          </h1>
        </div>
    </div>

    {/* <div className="arrow rightArrow" onClick={next}>
      <p> right </p>
    </div> */}
    
  </div>
  )
}

export default HeroSlide