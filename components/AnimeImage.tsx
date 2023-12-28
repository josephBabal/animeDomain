import Image from 'next/image';
import { AnimeProp, AnimePropFull } from '@/app/types/types';

const AnimeImage: React.FC<{ anime: AnimePropFull }> = ({ anime }) => {
  return (
    <div>
      <Image
        src={anime.images.jpg.large_image_url}
        alt={anime.title}
        className="rounded"
        width="200"
        height="200"
      />
    </div>
  );
};

export default AnimeImage;
