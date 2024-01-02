"use client"

import { useState, useEffect } from "react"
const Hero = () => {
  // const [currentIndex, setCurrentIndex] = useState(0)
  const images = ['/hero-image-1.jpg', '/hero-image-2.jpg']

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [images.length]);

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const radioElement = document.getElementById(`radio${counter}`) as HTMLInputElement;
      if (radioElement) {
        radioElement.checked = true;
        setCounter((prevCounter) => (prevCounter === 1 ? 2 : 1));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [counter]);




  return (
    <div>
      <div className="hero-section relative">
        <img
          // src={`/hero-image-1.jpg?v=1`} 
          src={`/hero-image-2.jpg`}
          alt="Hero image illustration by Vanessa Ramirez Medina"
          title="Hero image illustration by Vanessa Ramirez Medina"
          loading="lazy"
        /> 

  
        <div className="absolute  top-[40%] md:top-1/3 left-[10%] w-[40%] ">
          <h1 className=" text-2xl  md:text-5xl lg:text-6xl text-white lg:max-w-lg font-bold ">
            Explore The <span className="mainGradient"> Domain</span> of
            Anime
          </h1>
        </div>
      </div> 

    {/* <div className="hero-section relative">
      <img
        // src={`/hero-image-1.jpg?v=1`} 
        src={`/hero-image-1.jpg`}
        alt="Hero image illustration by Vanessa Ramirez Medina"
        title="Hero image illustration by Vanessa Ramirez Medina"
        loading="lazy"
        className="bg-image--cover"
      /> 
      </div> */}


  </div> 
  )
}

export default Hero