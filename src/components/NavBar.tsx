import logo from '../assets/Logo/logo.webp';
import ThemeSwitch from './ThemeSwitch';
import SearchInput from './SearchInput';
import { tw } from 'typewind';

function NavBar({
  onSearch,
  class: className,
}: {
  onSearch: (searchText: string) => void;
  class?: string;
}) {
  return (
    <nav
      class={`${tw.flex.w_full.items_center.gap_6.px_2.text_black.dark(tw.text_white)} ${className}`}
    >
      <img
        src={logo}
        alt="A rounded square logo, with a white background showing 6 droplets connect in center. The logo contains a hex nut with a circle in the center of the nut. The logo represents connectivity. All the elements that make up the logo besides the background are somewhat of a purple hue."
        class={tw.size_20}
      />
      <SearchInput onSearch={onSearch} />
      <ThemeSwitch />
    </nav>
  );
}

export default NavBar;
