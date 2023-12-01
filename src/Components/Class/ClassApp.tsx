import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export type TComponentProps = {
  incorrectCount: number;
  correctCount: number;
  answers: string[];
  fishInput: string;
};

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
    answers: ["trout", "salmon", "tuna", "shark"],
    fishInput: "",
  };

  checkAnswer = (guessedFish: string) => {
    const { answers, correctCount, incorrectCount } = this.state;
    if (guessedFish && guessedFish === answers[0]) {
      this.setState({ correctCount: correctCount + 1 });
    } else {
      this.setState({ incorrectCount: incorrectCount + 1 });
    }
    if (answers.length !== 0) {
      this.setState({ answers: answers.slice(1) });
    }
  };

  render() {
    return (
      <>
        <>
          {this.state.answers.length !== 0 && (
            <ClassScoreBoard
              incorrectCount={this.state.incorrectCount}
              correctCount={this.state.correctCount}
              answersLeft={this.state.answers}
            />
          )}
          <ClassGameBoard
            checkAnswer={this.checkAnswer}
            answers={this.state.answers}
          />
        </>
        {this.state.answers.length === 0 && (
          <ClassFinalScore correctCount={this.state.correctCount} />
        )}
      </>
    );
  }
}
