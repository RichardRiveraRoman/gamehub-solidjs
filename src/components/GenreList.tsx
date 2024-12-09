import { For, Show } from 'solid-js';
import useGenres, { type Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import Spinner from './Spinner';
import { tw } from 'typewind';

function GenreList({
  selectedGenre,
  onSelectGenre,
}: {
  selectedGenre: () => Genre | null;
  onSelectGenre: (genre: Genre) => void;
}) {
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
            <div
              class={tw.m_2.flex.items_center.gap_2.px_2.py_2.text_black.dark(
                tw.text_white,
              )}
            >
              <img
                class={tw.size_9.rounded_xl.object_cover}
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              />
              <button
                type="button"
                class={`${tw.text_left.hover(tw.font_bold.underline)}${genre.id === selectedGenre()?.id ? 'font-bold' : 'font-normal'}`}
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
