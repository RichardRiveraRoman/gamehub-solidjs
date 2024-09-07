import './App.scss';
import NavBar from './components/NavBar';
import GenreList from './components/GenreList';
import type { Genre } from './hooks/useGenres';
import { createSignal } from 'solid-js';
import PlatformSelector from './components/PlatformSelector';
import type { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import GameGrid from './components/GameGrid';
import { tw } from 'typewind';

export type GameQuery = {
  genre: Genre | null;
  platform: Platform | null;
  searchText: string;
  sortOrder: string;
};

function App() {
  const [gameQuery, setGameQuery] = createSignal<GameQuery>({} as GameQuery);

  return (
    <div class={tw.raw('app-container').bg_zinc_100.dark(tw.bg_zinc_900)}>
      <NavBar
        class="app-nav"
        onSearch={(searchText: string) =>
          setGameQuery({ ...gameQuery(), searchText })
        }
      />
      <aside class="app-aside">
        <GenreList
          selectedGenre={gameQuery().genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery(), genre })}
        />
      </aside>
      <main class={tw.raw('grid-main').mx_auto}>
        <div class={tw.flex.gap_2}>
          <PlatformSelector
            selectedPlatform={() => gameQuery().platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery(), platform })
            }
          />
          <SortSelector
            sortOrder={() => gameQuery().sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery(), sortOrder })
            }
          />
        </div>
        <GameGrid gameQuery={gameQuery} />
      </main>
    </div>
  );
}

export default App;
