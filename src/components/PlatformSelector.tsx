import { For } from 'solid-js';
import type { Platform } from '../hooks/useGames';
import usePlatforms from '../hooks/usePlatforms';
import Selector from './Selector';
import { tw } from 'typewind';

interface Props {
  selectedPlatform: () => Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { data, error } = usePlatforms();

  if (error()) return null;

  return (
    <Selector
      menu={() => `Sort: ${selectedPlatform()?.name || 'Platforms'}`}
      items={
        <For each={data()}>
          {(platform) => (
            <button
              type="button"
              class={tw.text_gray_700
                .dark(tw.text_white)
                .block.w_full.text_left.px_4.py_2.text_sm.hover(
                  tw.bg_gray_100.dark(tw.bg_zinc_500.text_white).text_gray_900,
                )}
              role="menuitem"
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </button>
          )}
        </For>
      }
    />
  );
}

export default PlatformSelector;
