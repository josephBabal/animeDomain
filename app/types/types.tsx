
type ImageUrls = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
};

type Images = {
  jpg: ImageUrls;
  webp: ImageUrls;
};

type Title = {
  type: string;
  title: string;
};

type AiredProp = {
  from: {
    day: number;
    month: number;
    year: number;
  };
  to: {
    day: number;
    month: number;
    year: number;
  };
  string: string;
};

type Aired = {
  from: string;
  to: string;
  prop: AiredProp;
};

type Producer = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type Licensor = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type Studio = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type Genre = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type ExplicitGenre = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type Themes = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type Demographic = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type Trailer = {
  youtube_id: string;
  url: string;
  embed_url: string;
};

type TitleSynonym = string;

type RelationEntry = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type Relation = {
  relation: string;
  entry: RelationEntry[];
};

type Theme = {
  openings: string[];
  endings: string[];
};

type External = {
  name: string;
  url: string;
};

type Streaming = External; // Streaming has the same structure as External

//* getAnimeFullById
export type AnimePropFull = {
  mal_id: number;
  url: string;
  images: Images;
  trailer?: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: TitleSynonym[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis?: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: Producer[];
  licensors: Licensor[];
  studios: Studio[];
  genres: Genre[];
  explicit_genres: ExplicitGenre[];
  themes: Themes[];
  demographics: Demographic[];
  relations: Relation[];
  theme: Theme;
  external: External[];
  streaming: Streaming[];
};

type DateOptions = {
  year: string,
  month: string,
  day: string
}



//* getAnimeById
export type AnimeProp = {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: TitleSynonym[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: Producer[];
  licensors: Licensor[];
  studios: Studio[];
  genres: Genre[];
  explicit_genres: ExplicitGenre[];
  themes: Themes[];
  demographics: Demographic[];
};

type PaginationItems = {
  count: number;
  total: number;
  per_page: number;
};


type Pagination = {
  last_visible_page: number;
  has_next_page: boolean;
  items: PaginationItems;
};



type AnimePropArray = AnimeProp[];

export type AnimePagination = {
  pagination: Pagination;
  data: AnimePropArray;
};
