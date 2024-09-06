import { For, Show } from 'solid-js';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import type { Genre } from '../hooks/useGenres';

function GameGrid({ selectedGenre }: { selectedGenre: () => Genre | null }) {
  const { data: games, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div class="grid gap-3 p-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <Show when={isLoading()}>
        <For each={skeletons}>{() => <GameCardSkeleton />}</For>
      </Show>

      <Show when={error()}>
        <p class="text-red-500">{error()}</p>
      </Show>

      <Show when={!isLoading() && !error()}>
        <For each={games()}>{(game) => <GameCard game={game} />}</For>
      </Show>
    </div>
  );
}

export default GameGrid;
