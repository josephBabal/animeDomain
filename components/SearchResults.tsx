"use client"
import Image from "next/image"
import { AnimeProp } from "@/app/types/types"
import Link from "next/link"


type SearchResultsProps = {
  results?: AnimeProp[];
  linkRefs: React.RefObject<HTMLAnchorElement>[];
};


const SearchResults = ({results, linkRefs}: SearchResultsProps) => {
  const newResults = results?.slice(0,6)
  const click = () => {
    console.log("clicked")
  }
  return (
    <div className="absolute top-[44px]     w-full md:w-[60%] flex flex-col bg-zinc-700 py-4 z-10">
      {newResults && newResults.length === 0 && <div className="ps-12"> No results </div>}
      {newResults && newResults.length > 0 && newResults.map((anime: AnimeProp ,idx: number) => (
        <Link
          href={`/anime/${anime.mal_id.toString()}`}
          key={idx}
          className="flex gap-4 hover:bg-zinc-500 p-2"
          onClick={click}
          ref={linkRefs[idx]}

        > 
          <Image 
            src={anime.images.jpg.large_image_url}
            alt={anime.title}
            width="50"
            height="50"
          />
          {anime.title_english !== null ? 
            anime.title_english 
            :
            anime.titles[0].title
          } 
          </Link> 
      ))}
    </div>
  )
}

export default SearchResults