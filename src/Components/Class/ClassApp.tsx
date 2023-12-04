import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export type TComponentProps = {
  incorrectCount: number;
  correctCount: number;
  fishInput: string;
};

type TState = {
  incorrectCount: number;
  correctCount: number;
  fishInput: string;
};

export class ClassApp extends Component<Record<never, never>, TState> {
  state: TState = {
    incorrectCount: 0,
    correctCount: 0,
    fishInput: "",
  };

  initialFishes = ["trout", "salmon", "tuna", "shark"];

  checkAnswer = (guessedFish: string) => {
    const { correctCount, incorrectCount } = this.state;
    const currentFish = this.initialFishes[correctCount + incorrectCount];
    if (guessedFish && guessedFish === currentFish) {
      this.setState({ correctCount: correctCount + 1 });
    } else {
      this.setState({ incorrectCount: incorrectCount + 1 });
    }
  };

  get fishCount() {
    return this.state.correctCount + this.state.incorrectCount;
  }

  render() {
    return (
      <>
        <>
          {this.fishCount !== this.initialFishes.length && (
            <ClassScoreBoard
              incorrectCount={this.state.incorrectCount}
              correctCount={this.state.correctCount}
              answersLeft={this.initialFishes}
              fishCount={this.fishCount}
            />
          )}
          {this.fishCount !== this.initialFishes.length && (
            <ClassGameBoard
              checkAnswer={this.checkAnswer}
              fishCount={this.fishCount}
            />
          )}
        </>
        {this.fishCount === this.initialFishes.length && (
          <ClassFinalScore
            correctCount={this.state.correctCount}
            initialFishCount={this.initialFishes.length}
          />
        )}
      </>
    );
  }
}
