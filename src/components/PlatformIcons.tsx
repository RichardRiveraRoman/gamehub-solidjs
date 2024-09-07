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
import segaIcon from '../assets/Platforms/sega.png';
import dangerIcon from '../assets/Platforms/danger.png';
import { tw } from 'typewind';

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
  sega: segaIcon,
};

const PlatformIcons: Component<{ platforms: Platform[] }> = (props) => (
  <span
    class={tw
      .raw('custom-bg')
      .flex.h_8.max_w_sm.items_center.gap_2.rounded.px_2.outline.outline_1.outline_slate_300$[
        '50'
      ].dark(tw.outline_none)}
  >
    <For each={props.platforms}>
      {(platform) => (
        <img
          src={platformIcons[platform.slug] || dangerIcon}
          alt={`${platform.name} icon`}
          title={platform.name}
          class={tw.raw('platform-icon').h_4.w_4.object_contain}
        />
      )}
    </For>
  </span>
);

export default PlatformIcons;
