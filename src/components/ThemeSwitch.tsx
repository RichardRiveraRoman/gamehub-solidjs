import { createEffect, createSignal } from 'solid-js';
import { tw } from 'typewind';

type Theme = 'light' | 'dark' | 'system';

function useTheme() {
  const [theme, setTheme] = createSignal<Theme>(getInitialTheme());

  function getInitialTheme(): Theme {
    if (typeof window === 'undefined') return 'system';
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  createEffect(() => {
    const controller = new AbortController();
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
    return () => controller.abort();
  }, [theme]);

  return [theme, setTheme] as const;
}

function ThemeSwitch() {
  const [theme, setTheme] = useTheme();

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  return (
    <label
      class={
        tw.inline_flex.cursor_pointer.items_center.justify_center.px_6.py_4
          .align_middle
      }
    >
      <input
        type="checkbox"
        class={tw.raw('peer').sr_only}
        checked={theme() === 'dark'}
        onChange={toggleTheme}
      />
      <span
        class={tw.absolute.h_6.w_10.rounded_full.bg_gray_200.shadow_inner
          .before(
            tw.absolute.left_1.top_1.size_4.rounded_full.border.border_gray_300
              .bg_white.shadow_md.transition_transform.duration_300.ease_in_out
              .content_["''"],
          )
          .raw('peer')
          .peer_checked(tw.bg_green_300.before(tw.translate_x_4))
          .peer_focus(
            tw.outline_transparent.outline.outline_1.outline_offset_1
              .outline_green_300,
          )}
      />
    </label>
  );
}

export default ThemeSwitch;
