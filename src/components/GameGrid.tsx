import { For } from 'solid-js';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

function GameGrid() {
  const { games, error, isLoading } = useGames();

  return (
    <>
      {isLoading() && <p>Loading...</p>}
      {error() && <p>{error()}</p>}
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 gap-3">
        <For each={games()}>{(game) => <GameCard game={game} />}</For>
      </div>
    </>
  );
}

export default GameGrid;
