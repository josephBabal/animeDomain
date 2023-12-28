
import { AnimePropFull } from '@/app/types/types';

const Trailer: React.FC<{ anime: AnimePropFull }> = ({ anime }) => {
  return (
    <iframe
      src={`${anime.trailer?.embed_url}?mute=1`}
      title={anime?.title}
      allowFullScreen
      loading="lazy"
      className="
        mx-auto 
        w-auto
        h-[200px]  
        sm:h-[250px]
        sm:w-[500px]
        m:w-[600px]
        lg:w-[700px]
        lg:h-[400px]
      "
    >
    </iframe>
  );
};

export default Trailer;
