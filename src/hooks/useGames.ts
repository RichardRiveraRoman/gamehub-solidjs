import { createEffect, createSignal } from 'solid-js';
import apiClient from '../services/apiClient';
import { CanceledError } from 'axios';

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
};

type FetchGamesResponse = {
  count: number;
  results: Game[];
};

function useGames() {
  const [games, setGames] = createSignal<Game[]>([]);
  const [error, setError] = createSignal('');
  const [isLoading, setLoading] = createSignal(false);

  createEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [games()]);

  return { games, error, isLoading };
}

export default useGames;
