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
    Exceptional: 'bg-green-500 dark:bg-green-600',
    Recommended: 'bg-blue-500 dark:bg-blue-600',
    Meh: 'bg-yellow-500 dark:bg-yellow-600',
    Skip: 'bg-red-500 dark:bg-red-600',
  };

  return (
    <span
      class={`inline-block rounded px-3 py-1 text-sm font-semibold text-white ${
        colors[ratingString] || 'bg-gray-500 dark:bg-gray-600'
      }`}
    >
      {ratingString}
    </span>
  );
};

export default GameRating;
