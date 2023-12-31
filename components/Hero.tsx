
const Hero = () => {

  return (
    <div >
      <div className="hero-section">
        <img
          // src={`/hero-image-1.jpg?v=1`} 
          src={`/hero-image-1.jpg`}
          alt="Hero image illustration by Vanessa Ramirez Medina"
          title="Hero image illustration by Vanessa Ramirez Medina"
          loading="lazy"
          className="bg-image--cover"
        />
        <div className="absolute  top-[40%] md:top-1/3 left-[10%] w-[40%] ">
          <h1 className="text-2xl md:text-5xl lg:text-6xl text-white lg:max-w-lg font-bold ">
            Explore The <span className="mainGradient"> Domain</span> of
            Anime
          </h1>
        </div>
      </div>
    </div>



  )
}

export default Hero