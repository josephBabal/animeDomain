import Image from 'next/image'
import Loader from "../components/Loader";
// import { data } from "./data";
import { fetchAnime } from './action';
import SearchContainer from '@/components/SearchContainer';
import Hero from '@/components/Hero';

export default async function Home() {
  const data = await fetchAnime(1)
  return (
    <div>
      <Hero />
      <div className=" 
        max-w-7xl 
        mt-10
        mx-auto
        px-[15%]
        sm:px-[10%]
        lg:px-[100px] 
        flex 
        flex-col 
        gap-10">
        
        <h2 className=" text-2xl text-white font-bold">Explore Anime</h2>
        <SearchContainer />
        <section className="container">
          {/* <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
          {data}
          {/* {data.map((item: AnimeProp, index: number) => (
            <AnimeCard 
              key={item.mal_id} 
              anime={item} 
              index={index} 
            />
          ))} */}
        </section>
          <Loader />
        {/* </main> */}
      </div>
    </div>
  )
}
