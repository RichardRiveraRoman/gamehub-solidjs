import { For, type Component } from 'solid-js';
import type { Platform } from '../hooks/useGames';
import androidIcon from '../assets/Platforms/android.png';
import iosIcon from '../assets/Platforms/ios.png';
import linuxIcon from '../assets/Platforms/linux.png';
import macIcon from '../assets/Platforms/mac.png';
import nintendoIcon from '../assets/Platforms/nintendo.png';
import pcIcon from '../assets/Platforms/pc.png';
import playstationIcon from '../assets/Platforms/playstation.png';
import webIcon from '../assets/Platforms/web.png';
import xboxIcon from '../assets/Platforms/xbox.png';

const platformIcons: Record<string, string> = {
  android: androidIcon,
  ios: iosIcon,
  linux: linuxIcon,
  mac: macIcon,
  nintendo: nintendoIcon,
  pc: pcIcon,
  playstation: playstationIcon,
  web: webIcon,
  xbox: xboxIcon,
};

const PlatformIcons: Component<{ platforms: Platform[] }> = (props) => (
  <span class="custom-bg flex h-8 max-w-sm items-center gap-2 rounded px-2 outline outline-1 outline-slate-300/50 dark:outline-none">
    <For each={props.platforms}>
      {(platform) => (
        <img
          src={platformIcons[platform.slug] || ''}
          alt={`${platform.name} icon`}
          title={platform.name}
          class="platform-icon h-4 w-4 object-contain"
        />
      )}
    </For>
  </span>
);

export default PlatformIcons;
