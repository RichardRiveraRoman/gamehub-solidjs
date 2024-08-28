import { For } from 'solid-js';
import useGames from '../hooks/useGames';

function GameGrid() {
  const { games, error, isLoading } = useGames();

  return (
    <>
      {isLoading() && <p>Loading...</p>}
      {error() && <p>{error()}</p>}
      <ul>
        <For each={games()}>{(game) => <li>{game.name}</li>}</For>
      </ul>
    </>
  );
}

export default GameGrid;
