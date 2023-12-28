"use server";
//* server action because of "use server"
import AnimeCard from "@/components/AnimeCard";
import { AnimeProp, AnimePropFull } from "./types/types";
import { AnimePagination } from "./types/types";
import { JIKAN_URL } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `${JIKAN_URL}/anime?page=${page}&order_by=popularity&limit=8`
  )

  const data = await response.json()

  //* can return as data or in this case, map over page 
  return data.data.map((item: AnimeProp, index: number) => (
    <AnimeCard 
      key={item.mal_id} 
      anime={item} 
      index={index} 
    />
  ))
}

export const fetchAnimeFullById = async(id: string) => {
  const response = await fetch(
    `${JIKAN_URL}/anime/${id}/full`
  )

  const data = await response.json()

  //* can return as data or in this case, map over page 
  return data.data
}

export const getAnimeSearch = async(query: string) => {
  const response = await fetch(
    `${JIKAN_URL}/anime?q=${query}`
  )

  const data: AnimePagination = await response.json()

  return data.data
}