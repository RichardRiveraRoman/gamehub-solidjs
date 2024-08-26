import { createEffect, createSignal } from 'solid-js';

type Theme = 'light' | 'dark' | 'system';

function useTheme() {
  const [theme, setTheme] = createSignal<Theme>(getInitialTheme());

  function getInitialTheme(): Theme {
    if (typeof window === 'undefined') return 'system';
    return (localStorage.getItem('theme') as Theme) || 'system';
  }

  createEffect(() => {
    const root = window.document.documentElement;
    const isDark =
      theme() === 'dark' ||
      (theme() === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    root.style.colorScheme = isDark ? 'dark' : 'light';

    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    if (theme() === 'system') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', theme());
    }
  }, [theme]);

  return [theme, setTheme] as const;
}

function ThemeSwitch() {
  const [theme, setTheme] = useTheme();

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  return (
    <label class="inline-flex cursor-pointer items-center justify-center px-6 py-4 align-middle">
      <input
        type="checkbox"
        class="peer sr-only"
        checked={theme() === 'dark'}
        onChange={toggleTheme}
      />
      <span class="peer absolute h-6 w-10 rounded-full bg-gray-200 shadow-inner before:absolute before:left-1 before:top-1 before:size-4 before:rounded-full before:border before:border-gray-300 before:bg-white before:shadow-md before:transition-transform before:duration-300 before:ease-in-out before:content-[''] peer-checked:bg-green-300 peer-checked:before:translate-x-4 peer-focus:outline-transparent peer-focus-visible:outline peer-focus-visible:outline-1 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-green-300" />
    </label>
  );
}

export default ThemeSwitch;
