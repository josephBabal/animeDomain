import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
export const SHIKIMORI_URL = "https://shikimori.one";
import Link from "next/link";

export const JIKAN_URL = "https://api.jikan.moe/v4"
import { AnimeProp } from "@/app/types/types";

type Prop = {
  anime: AnimeProp;
  index: number;
}

//* used for framer motion
const variants = {
  hidden: { opacity: 0},
  visible: { opacity: 1 }
}

//* everything is server side except MotionDiv
const AnimeCard = ({ anime, index }: Prop) => {
  return (
    <MotionDiv 
      className="relative max-h-[500px] w-[200px]"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5
      }}
      viewport={{ amount: 0 }}
    >
      <Link href={`/anime/${anime.mal_id.toString()}`} title={anime.title}>
        <div className="relative w-full object-cover h-[300px]">
          <img
            src={anime.images.jpg.image_url}
            alt={anime.title}
            className="rounded h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 py-3">
          <div className="flex justify-between items-center gap-1">
            <h2 className="text-white text-base font-bold">
              {anime.title_english !== null ? 
                anime.title_english 
                :
                anime.titles[0].title
              }
            </h2>
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
}

export default AnimeCard;