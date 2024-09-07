import { tw } from 'typewind';
import type { Game } from '../hooks/useGames';
// import getCroppedImageUrl from '../services/image-url';
import GameRating from './GameRating';
import GameScore from './GameScore';
import PlatformIcons from './PlatformIcons';

function GameCard({ game }: { game: Game }) {
  return (
    <div
      class={tw
        .raw('custom-bg')
        .flex.max_h_96.min_w_52.max_w_72.flex_col.overflow_hidden.rounded_lg.shadow_lg.outline.outline_1.outline_slate_400$[
          '50'
        ].transition_colors.duration_200.dark(tw.outline_none)}
    >
      <img
        class={tw.h_52.w_72.object_cover}
        // Breaks the app,but drastically reduces image sizes
        // src={getCroppedImageUrl(game.background_image)}
        src={game.background_image}
        alt={game.name}
      />
      <div class={tw.flex.flex_grow.flex_col.px_5.py_6}>
        <p
          class={tw.mb_3.mt_auto.text_center.text_xl.font_bold.text_gray_800.dark(
            tw.text_white,
          )}
        >
          {game.name}
        </p>
        <div class={tw.mt_auto}>
          <div class={tw.mb_2.flex.justify_between}>
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
