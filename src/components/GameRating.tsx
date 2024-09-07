import { tw } from 'typewind';

const GameRating = ({ rating }: { rating: number }) => {
  const mapRating = (rating: number): string => {
    const ratings: { [key: number]: string } = {
      1: 'Skip',
      3: 'Meh',
      4: 'Recommended',
      5: 'Exceptional',
    };
    return ratings[rating] || 'Skip';
  };

  const ratingString = mapRating(rating);

  const colors: { [key: string]: string } = {
    Exceptional: `${tw.bg_green_500.dark(tw.bg_green_600)}`,
    Recommended: `${tw.bg_blue_500.dark(tw.bg_blue_600)}`,
    Meh: `${tw.bg_yellow_500.dark(tw.bg_yellow_600)}`,
    Skip: `${tw.bg_red_500.dark(tw.bg_red_600)}`,
  };

  return (
    // <span class={`${tw.inline_block.rounded.px_3.py_1.text_sm.font_semibold.text_white} ${colors[ratingString] || 'bg-gray-500 dark:bg-gray-600'}`}>
    <span
      class={`${tw.inline_block.rounded.px_3.py_1.text_sm.font_semibold.text_white} ${colors[ratingString]} || ${tw.bg_gray_500.dark(tw.bg_gray_600)}}`}
    >
      {ratingString}
    </span>
  );
};

export default GameRating;
