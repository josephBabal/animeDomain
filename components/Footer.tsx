

const Footer = () => {
  return (
    <div className="w-full text-center"> 
       <hr className="border-t mt-10 border-zinc-600"/>
      <footer className="flex flex-col gap-3 bg-zinc-900 pt-5 pb-10 p-4 px-[7.5%]">
        <h1 className="text-start font-bold text-lg lg:text-xl mb-5 md:mb-2"> Anime Domain </h1>
        {/* <p>This project uses the <a href="https://jikan.moe/" target="_blank" rel="noopener noreferrer">Jikan API</a>, which is licensed under the MIT License.</p> */}
        <p>&copy; 2023 Anime Domain. </p>
        <p>Hero image illustration by Vanessa Ramirez Medina.</p>
      </footer>
    </div>
  )
}

export default Footer