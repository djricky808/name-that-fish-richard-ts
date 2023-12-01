import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export type TFishInformation = {
  namedFish: string;
};

export function FunctionalApp() {
  const answersLeft = ["trout", "salmon", "tuna", "shark"];

  const [fishCount, setFishCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [answers, setAnswers] = useState(answersLeft);

  const checkAnswer = (guessedFish: string) => {
    if (guessedFish && guessedFish == answers[0]) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
    if (answers.length !== 0) {
      setAnswers(answers.slice(1));
    }
  };

  return (
    <>
      {answers.length !== 0 && (
        <FunctionalScoreBoard
          correctCount={correctCount}
          incorrectCount={incorrectCount}
          answers={answers}
        />
      )}
      <FunctionalGameBoard
        fishCount={fishCount}
        setFishCount={setFishCount}
        checkAnswer={checkAnswer}
        answers={answers}
      />
      {answers.length === 0 && (
        <FunctionalFinalScore correctCount={correctCount} />
      )}
    </>
  );
}
