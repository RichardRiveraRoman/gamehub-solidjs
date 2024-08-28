import './App.scss';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';

function App() {
  return (
    <div class="app-container bg-zinc-100 dark:bg-zinc-900">
      <NavBar class="app-nav" />
      <aside class="app-aside">
        <h2 class="bg-blue-500">Aside</h2>
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
