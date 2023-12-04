import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export type TFishInformation = {
  namedFish: string;
};
const initialFishes = ["trout", "salmon", "tuna", "shark"];

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const fishCount = correctCount + incorrectCount;

  const checkAnswer = (guessedFish: string) => {
    if (guessedFish && guessedFish == initialFishes[fishCount]) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
  };

  return (
    <>
      {initialFishes.length !== fishCount && (
        <FunctionalScoreBoard
          correctCount={correctCount}
          incorrectCount={incorrectCount}
          answers={initialFishes}
          fishCount={fishCount}
        />
      )}
      {initialFishes.length !== fishCount && (
        <FunctionalGameBoard fishCount={fishCount} checkAnswer={checkAnswer} />
      )}
      {fishCount === initialFishes.length && (
        <FunctionalFinalScore
          correctCount={correctCount}
          initialFishCount={initialFishes.length}
        />
      )}
    </>
  );
}
