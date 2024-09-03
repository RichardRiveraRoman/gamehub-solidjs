import { For } from 'solid-js';

const GameCardSkeleton = () => {
  return (
    <div class="max-w-64 max-h-96 rounded-lg shadow-lg overflow-hidden custom-bg transition-colors duration-200">
      <div class="w-64 h-48 custom-bg animate-pulse" />
      <div class="px-6 py-4">
        <div class="h-7 mx-auto custom-bg rounded w-3/4 mb-3 animate-pulse" />
        <div class="flex justify-between mb-2">
          <div class="custom-bg flex gap-1 p-1 rounded">
            <For each={[1, 2, 3]}>
              {() => (
                <div class="size-6 custom-bg border-[1px] border-zinc-500/20 rounded animate-pulse" />
              )}
            </For>
          </div>
          <div class="custom-bg border-[1px] border-zinc-500/20 w-8 h-6 rounded animate-pulse" />
        </div>
        <div class="h-7 custom-bg rounded w-1/3 animate-pulse" />
      </div>
    </div>
  );
};

export default GameCardSkeleton;
