import { For, Show } from 'solid-js';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

function GameGrid() {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 gap-3">
      <Show when={isLoading()}>
        <For each={skeletons}>{() => <GameCardSkeleton />}</For>
      </Show>

      <Show when={error()}>
        <p class="text-red-500">{error()}</p>
      </Show>

      <For each={data()}>{(game) => <GameCard game={game} />}</For>
    </div>
  );
}

export default GameGrid;
