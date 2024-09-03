import { For } from 'solid-js';
import useGenres from '../hooks/useGenres';

function GenresList() {
  const { data } = useGenres();
  return (
    <ul>
      <For each={data()}>{(data) => <li>{data.name}</li>}</For>
    </ul>
  );
}

export default GenresList;
