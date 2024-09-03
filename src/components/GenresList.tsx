import { For } from 'solid-js';
import useGenres from '../hooks/useGenres';

function GenresList() {
  const { genres } = useGenres();
  return (
    <ul>
      <For each={genres()}>{(genre) => <li>{genre.name}</li>}</For>
    </ul>
  );
}

export default GenresList;
