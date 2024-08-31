import type { Platform } from '../hooks/useGames';
import { For, createResource } from 'solid-js';

const PlatformIcons = ({ platforms }: { platforms: Platform[] }) => {
  const loadImage = async (slug: string) => {
    try {
      return (await import(`../assets/Platforms/${slug}.png`)).default;
    } catch (error) {
      return (await import('../assets/Platforms/danger.png')).default;
    }
  };

  return (
    <span class="flex gap-2 px-2 items-center max-w-sm h-8 rounded custom-bg outline outline-slate-300/50 outline-1 dark:outline-none">
      <For each={platforms}>
        {(platform) => {
          const [src] = createResource(() => loadImage(platform.slug));
          return (
            <img
              src={src()}
              alt={`${platform.name} icon`}
              title={platform.name}
              class="w-4 h-4 object-contain platform-icon"
            />
          );
        }}
      </For>
    </span>
  );
};

export default PlatformIcons;
