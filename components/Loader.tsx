"use client"

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { fetchAnime } from "@/app/action";
import AnimeCard from "./AnimeCard";
import { AnimeProp } from "@/app/types/types";


let page = 2

export type AnimeCard = JSX.Element

const Loader = () => {
  //* checks if user scrolled to ref and updates inView
  const { ref, inView } = useInView()
  const [data, setData] = useState<AnimeCard[]>([])

  useEffect(() => {
    if (inView) {
      fetchAnime(page)
        .then((res) => {
          setData([...data, ...res]);
          page++;
        });
    }
  }, [inView, data])

  return (
    <>
      <section className="container">
        {data}
      </section>
      <section className="flex justify-center">
        <div ref={ref} >
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default Loader;