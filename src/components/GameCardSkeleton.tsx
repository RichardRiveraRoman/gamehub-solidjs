import { For } from 'solid-js';

const GameCardSkeleton = () => {
  return (
    <div class="custom-bg max-h-96 min-w-52 max-w-72 overflow-hidden rounded-lg shadow-lg transition-colors duration-200">
      <div class="custom-bg h-52 w-72 animate-pulse" />
      <div class="px-6 py-5">
        <div class="custom-bg mx-auto mb-3 h-7 w-3/4 animate-pulse rounded" />
        <div class="mb-4 flex justify-between">
          <div class="custom-bg flex gap-1 rounded p-1">
            <For each={[1, 2, 3]}>
              {() => (
                <div class="custom-bg size-6 animate-pulse rounded border-[1px] border-zinc-500/20" />
              )}
            </For>
          </div>
          <div class="custom-bg h-6 w-8 animate-pulse rounded border-[1px] border-zinc-500/20" />
        </div>
        <div class="custom-bg h-7 w-1/3 animate-pulse rounded" />
      </div>
    </div>
  );
};

export default GameCardSkeleton;
