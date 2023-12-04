import "./styles/final-score.css";
//const correctCount = 0;

export const FunctionalFinalScore = ({
  correctCount,
  initialFishCount,
}: {
  correctCount: number;
  initialFishCount: number;
}) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctCount}</p>
      <hr />
      <p>{initialFishCount}</p>
    </div>
  </div>
);
