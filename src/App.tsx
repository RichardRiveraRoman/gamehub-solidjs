import './App.scss';
import ThemeSwitcher from './components/ThemeSwitch';

function App() {
  return (
    <div class="app-container bg-zinc-100 dark:bg-zinc-900">
      <nav class="app-nav">
        <h2 class="bg-purple-500">Nav</h2>
        <ThemeSwitcher />
      </nav>
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
