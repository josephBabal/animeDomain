import Image from "next/image"


const Hero = () => {
  return (
    <div >
      <div className="hero-section">
        <img
          // src="https://images7.alphacoders.com/105/thumb-1920-1054068.png"
          // src="https://images6.alphacoders.com/129/1293436.jpg" 
          // src="https://images6.alphacoders.com/125/1252782.png"
          // src="https://wallpapercave.com/wp/wp12325840.jpg"
          // src="https://www.anime-internet.com/content/images/2021/11/maxresdefault.jpg"
          src="https://staticg.sportskeeda.com/editor/2023/09/d6dc9-16953963622489-1920.jpg"
          alt="Anime Hero Image"
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

      {/* // <div className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0"> */}
      {/* <div className="flex flex-wrap h-[70vh] bgImage bg-center bg-cover bg-no-repeat">
      
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Explore The <span className="red-gradient">Diverse Realms</span> of
          Anime Magic
        </h1>
      <div className="flex relative w-full "> */}
      {/* <div> */}
      {/* <Image 
          src="https://static.wikia.nocookie.net/jujutsu-kaisen/images/e/ef/Satoru_Gojo_%28Anime_2%29.png/revision/latest?cb=20201025013634"
          alt="anime" 
          width="200"
          height="200"
          className="object-contain" 
        />
        <Image 
        src="https://i.pinimg.com/originals/d1/56/5b/d1565b4a8cbeb463958ddf25ff5ce4ef.png"
        alt="anime" width="200"
        height="200"
          className="object-contain" 
        /> */}
      {/* </div>
      </div> */}
      {/* </div> */}
    </div>



  )
}

export default Hero