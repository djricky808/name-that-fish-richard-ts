import { Component } from "react";
import "./styles/score-board.css";

export class ClassScoreBoard extends Component<{
  incorrectCount: number;
  correctCount: number;
  answersLeft: string[];
  fishCount: number;
}> {
  render() {
    const { incorrectCount, correctCount, answersLeft, fishCount } = this.props;
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.slice(fishCount).map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
