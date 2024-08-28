import { createEffect, createSignal } from 'solid-js';
import { tw } from 'typewind';

type Theme = 'light' | 'dark' | 'system';

function useTheme() {
  const [theme, setTheme] = createSignal<Theme>(getInitialTheme());

  function getInitialTheme(): Theme {
    if (typeof window === 'undefined') return 'system';
    return (localStorage.getItem('theme') as Theme) || 'system';
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
          .before(tw.absolute)
          .before(tw.left_1)
          .before(tw.top_1)
          .before(tw.size_4)
          .before(tw.rounded_full)
          .before(tw.border)
          .before(tw.border_gray_300)
          .before(tw.bg_white)
          .before(tw.shadow_md)
          .before(tw.transition_transform)
          .before(tw.duration_300)
          .before(tw.ease_in_out)
          .before(tw.content_["''"])
          .raw('peer')
          .peer_checked(tw.bg_green_300)
          .peer_checked(tw.before(tw.translate_x_4))
          .peer_focus(tw.outline_transparent)
          .peer_focus_visible(tw.outline)
          .peer_focus_visible(tw.outline_1)
          .peer_focus_visible(tw.outline_offset_1)
          .peer_focus_visible(tw.outline_green_300)}
      />
    </label>
  );
}

export default ThemeSwitch;
