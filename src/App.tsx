import './App.scss';
import NavBar from './components/NavBar';

function App() {
  return (
    <div class="app-container bg-zinc-100 dark:bg-zinc-900">
      <NavBar class="app-nav" />
      <aside class="app-aside">
        <h2 class="bg-blue-500">Aside</h2>
      </aside>
      <main class="grid-main mx-auto">
        <div class="flex gap-2">
          <h2 class="bg-orange-500">Main</h2>
        </div>
      </main>
    </div>
  );
}

export default App;
