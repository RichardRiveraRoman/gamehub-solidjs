import type { JSX } from 'solid-js/jsx-runtime';
import logo from '../assets/Logo/logo.webp';
import ThemeSwitch from './ThemeSwitch';

function NavBar(classAttr: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      class={`flex w-full items-center gap-6 px-2 text-black dark:text-white ${classAttr.class}`}
    >
      <img
        src={logo}
        alt="A rounded square logo, with a white background showing 6 droplets connect in center. The logo contains a hex nut with a circle in the center of the nut. The logo represents connectivity. All the elements that make up the logo besides the background are somewhat of a purple hue."
        class="size-20"
      />
      <p>NavBar</p>
      <ThemeSwitch />
    </nav>
  );
}

export default NavBar;
