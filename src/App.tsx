import './App.scss';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

function App() {
  return (
    <div class="app-container bg-zinc-100 dark:bg-zinc-900">
      <NavBar class="app-nav" />
      <aside class="app-aside">
        <GenreList />
      </aside>
      <main class="grid-main mx-auto">
        <div class="flex gap-2">
          <GameGrid />
        </div>
      </main>
    </div>
  );
}

export default App;
