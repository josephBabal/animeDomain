import { fetchAnimeFullById } from "../../action";
import ReadMore from "@/components/ReadMore";
import SeasonYear from "@/components/SeasonYear";
import AnimeDetails from "@/components/AnimeDetails";
import BackButton from "@/components/BackButton";
import { AnimePropFull, Genre } from "@/app/types/types";
import GenreTags from "@/components/GenreTags";
import AnimeImage from "@/components/AnimeImage";
import Trailer from "@/components/Trailer";

import type { Metadata, ResolvingMetadata } from 'next'


type Params = {
  id: string;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = params;

  // fetch data
  const component_item: AnimePropFull = await fetchAnimeFullById(id)

  return {
    title: component_item?.title_english || component_item?.title || "",
    description: component_item?.synopsis,
  };
}


const page = async ({ params }: { params: { id: string } }) => {
  const anime: AnimePropFull = await fetchAnimeFullById(params.id)
  const noData = "Unavailable"

  return (
    <div className="relative flex flex-col gap-5 max-w-[90ch] mt-5 mx-auto py-[5em]">
      <BackButton />

      <div>
        <SeasonYear 
          date={anime?.aired.from} 
          season={anime?.season} 
        />
      <h2 className="font-bold text-2xl lg:text-5xl ">
        {anime?.title_english || anime?.title || "No Title"}
      </h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {anime?.genres?.map((item: Genre, key: number) => (
          <div key={key}>
            <GenreTags genre={item}/>
          </div>
        ))}        
      </div>

      {/* <div className="bg-[#14161C] rounded-lg p-5 "> */}
      <div className="bg-zinc-800 rounded-lg p-5">
        <div className="flex flex-wrap gap-5 mb-5">
          {anime?.images && <AnimeImage anime={anime} />}
          <AnimeDetails anime={anime} noData={noData} />
        </div>
        {anime?.synopsis && <ReadMore text={anime.synopsis} maxLength={150} />}
      </div>
      
      {anime?.trailer && anime.trailer?.embed_url && 
        <div>
          <h3 className="font-bold text-2xl lg:text-4xl my-3 md:my-5 "> Trailer </h3>
          {anime.trailer?.embed_url && <Trailer anime={anime} />}
        </div>
      }
    </div>
  )
}

export default page
