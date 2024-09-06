import './App.scss';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import type { Genre } from './hooks/useGenres';
import { createSignal } from 'solid-js';

function App() {
  const [selectedGenre, setSelectedGenre] = createSignal<Genre | null>(null);

  return (
    <div class="app-container bg-zinc-100 dark:bg-zinc-900">
      <NavBar class="app-nav" />
      <aside class="app-aside">
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre} />
      </aside>
      <main class="grid-main mx-auto">
        <div class="flex gap-2">
          <GameGrid selectedGenre={selectedGenre} />
        </div>
      </main>
    </div>
  );
}

export default App;
