import { AnimePropFull } from "@/app/types/types";
import { abbreviateDate } from "@/utils/utils";

type AnimeDetailsProps = {
  anime: AnimePropFull,
  noData: string
}
const AnimeDetails = ({ anime, noData }: AnimeDetailsProps) => {
  const animeDetails = [
    { label: 'Score', value: anime?.score ? `${anime.score} / 10` : noData },
    { label: 'Scored By', value: anime?.scored_by },
    { label: 'Rank', value: anime?.rank ? anime.rank : noData },
    { label: 'Popularity', value: anime?.popularity },
    {
      label: 'Aired',
      value: anime?.status === 'Not yet aired' ? 
        noData
        : `${abbreviateDate(anime?.aired.from)} to ${abbreviateDate(anime?.aired.to)}`,
    },
    { label: 'Status', value: anime?.status },
    { label: 'Source', value: anime?.source },
    { label: 'Rating', value: anime?.rating },
    { label: 'Duration', value: anime?.duration },
  ];

  return (
    <div className="flex flex-col space-y-4 ms-0 lg:ms-5">
      {animeDetails.map((detail, index) => (
        <p key={index}>
          <span className="font-bold">{detail.label}:</span>{' '}
          <span className="text-gray-300">{detail.value}</span>
        </p>
      ))}
    </div>
  )
}

export default AnimeDetails