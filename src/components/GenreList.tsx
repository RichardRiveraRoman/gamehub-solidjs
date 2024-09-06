import { For, Show } from 'solid-js';
import useGenres, { type Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import Spinner from './Spinner';

function GenreList({ onSelectGenre }: { onSelectGenre: (genre: Genre) => void }) {
  const { data, error, isLoading } = useGenres();

  if (error()) return null;

  return (
    <ul>
      <Show when={isLoading()}>
        <Spinner />
      </Show>

      <For each={data()}>
        {(genre) => (
          <li>
            <div class="m-2 flex items-center gap-2 px-2 py-1 text-black dark:text-white">
              <img
                class="size-9 rounded-xl object-cover"
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              />
              <button
                type="button"
                class="text-left hover:font-bold hover:underline"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </button>
            </div>
          </li>
        )}
      </For>
    </ul>
  );
}

export default GenreList;
