import useData from './useData';
import type { Genre } from './useGenres';

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
};

function useGames(selectedGenre: () => Genre | null) {
  return useData<Game>(
    '/games',
    () => ({ params: { genres: selectedGenre()?.id } }),
    [selectedGenre()?.id],
  );
}

export default useGames;
