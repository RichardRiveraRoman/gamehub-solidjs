import { CanceledError } from 'axios';
import apiClient from '../services/apiClient';
import { createEffect, createSignal, For } from 'solid-js';

interface Game {
  id: number;
  name: string;
}

interface fetchGamesResponse {
  count: number;
  results: Game[];
}

function GameGrid() {
  const [games, setGames] = createSignal<Game[]>([]);
  const [error, setError] = createSignal('');
  const [isLoading, setLoading] = createSignal(false);

  createEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<fetchGamesResponse>('/gamesx', { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [games()]);

  return (
    <>
      {error() && <p>{error()}</p>}
      {isLoading() && <p>Loading...</p>}
      <ul>
        <For each={games()}>{(game) => <li>{game.name}</li>}</For>
      </ul>
    </>
  );
}

export default GameGrid;
