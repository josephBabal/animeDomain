import { Genre } from '@/app/types/types';

type GenreTagsProp = {
  genre: Genre
}
const GenreTags: React.FC<GenreTagsProp> = ({ genre }) => {
  return (
    <p 
      className="rounded-full border-zinc-500 border-2 text-zinc-200 px-2 " 
    > 
      {genre.name} 
    </p>
  )
}

export default GenreTags