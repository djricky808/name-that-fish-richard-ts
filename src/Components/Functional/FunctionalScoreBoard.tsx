import "./styles/score-board.css";

//  Where the score is presented

// const incorrectCount = 0;
// const correctCount = 0;

export function FunctionalScoreBoard({
  correctCount,
  incorrectCount,
  answers,
  fishCount,
}: {
  correctCount: number;
  incorrectCount: number;
  answers: string[];
  fishCount: number;
}) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answers.slice(fishCount).map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
