"use client"
import { BiChevronLeft } from "react-icons/bi";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  return (
    <>
      <BiChevronLeft 
        className="
          absolute 
          text-4xl
          lg:text-5xl 
          top-[1%] 
          left-[-6%] 
          hover:cursor-pointer
          lg:left-[-2.5%]" 
        
        onClick={handleClick}
      />
    </>
  )
}

export default BackButton