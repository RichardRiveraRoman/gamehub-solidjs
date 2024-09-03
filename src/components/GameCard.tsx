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
    <div class="custom-bg flex max-h-96 min-w-52 max-w-72 flex-col overflow-hidden rounded-lg shadow-lg outline outline-1 outline-slate-400/50 transition-colors duration-200 dark:outline-none">
      <img
        class="h-52 w-72 object-cover"
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
      />
      <div class="flex flex-grow flex-col px-5 py-6">
        <p class="mb-3 mt-auto text-center text-xl font-bold text-gray-800 dark:text-white">
          {game.name}
        </p>
        <div class="mt-auto">
          <div class="mb-2 flex justify-between">
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
