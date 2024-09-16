import { For, Show } from 'solid-js';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import type { GameQuery } from '../App';
import { tw } from 'typewind';

function GameGrid({ gameQuery }: { gameQuery: () => GameQuery }) {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    // Typewind CSS responsive game grid does not work because of `_2xl`
    <div
      class={tw.grid.gap_3.p_3
        .sm(tw.grid_cols_1)
        .md(tw.grid_cols_2)
        .lg(tw.grid_cols_3)
        .xl(tw.grid_cols_4)
        .raw('2xl:grid_cols_5')}
      // ._2xl(tw.grid_cols_5)}
    >
      {/* <div class="grid gap-3 p-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"> */}
      <Show when={isLoading()}>
        <For each={skeletons}>{() => <GameCardSkeleton />}</For>
      </Show>

      <Show when={error()}>
        <p class={tw.text_red_500}>{error()}</p>
      </Show>

      <Show when={!isLoading() && !error()}>
        <For each={data()}>{(game) => <GameCard game={game} />}</For>
      </Show>
    </div>
  );
}

export default GameGrid;
