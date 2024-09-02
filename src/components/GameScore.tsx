const GameScore = ({ score }: { score: number }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500 border-green-700';
    if (score >= 60) return 'text-yellow-500 border-yellow-500';
    return 'text-red-500 border-red-500';
  };

  return (
    <span
      class={`custom-bg w-8 h-6 my-auto text-center rounded-sm text-sm border-[1px] ${getScoreColor(score)}`}
    >
      {score}
    </span>
  );
};

export default GameScore;
