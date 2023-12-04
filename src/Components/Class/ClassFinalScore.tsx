import { Component } from "react";

export class ClassFinalScore extends Component<{
  correctCount: number;
  initialFishCount: number;
}> {
  render() {
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{this.props.correctCount}</p>
          <hr />
          <p>{this.props.initialFishCount}</p>
        </div>
      </div>
    );
  }
}
