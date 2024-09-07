import useData from './useData';
import type { GameQuery } from "../App";

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


// function useGames(selectedGenre: () => Genre | null, selectedPlatform: () => Platform | null) {
function useGames(gameQuery: () => GameQuery) {
  return useData<Game>(
    '/games',
    () => ({
      params: {
        genres: gameQuery().genre?.id,
        platforms: gameQuery().platform?.id,
        ordering: gameQuery().sortOrder,
        search: gameQuery().searchText,
      }
    }),
    [gameQuery()],
  );
}

export default useGames;
