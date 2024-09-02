import type { Game } from '../hooks/useGames';
import getCroppedImageUrl from '../services/image-url';
import GameRating from './GameRating';
import GameScore from './GameScore';
import PlatformIcons from './PlatformIcons';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <div class="max-w-64 max-h-96 rounded-lg shadow-lg overflow-hidden custom-bg outline outline-slate-400/50 outline-1 dark:outline-none transition-colors duration-200 flex flex-col">
      <img
        class="w-64 h-48 object-cover"
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
      />
      <div class="px-6 py-4 flex flex-col flex-grow">
        <p class="text-center mt-auto font-bold text-xl mb-3 text-gray-800 dark:text-white">
          {game.name}
        </p>
        <div class="mt-auto">
          <div class="flex justify-between mb-2">
            {game.parent_platforms && (
              <PlatformIcons
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
            )}
            {game.metacritic && <GameScore score={game.metacritic} />}
          </div>
          <GameRating rating={game.rating_top} />
        </div>
      </div>
    </div>
  );
}

export default GameCard;
