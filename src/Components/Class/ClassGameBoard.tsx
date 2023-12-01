import { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export class ClassGameBoard extends Component<{
  checkAnswer: (fishInput: string) => void;
  answers: string[];
}> {
  state = {
    fishInput: "",
    fishCount: 0,
  };

  render() {
    const { fishCount, fishInput } = this.state;

    const nextFishToName = initialFishes[fishCount];

    if (this.props.answers.length !== 0) {
      return (
        <div id="game-board">
          <div id="fish-container">
            <img src={nextFishToName.url} alt={nextFishToName.name} />
          </div>
          <form
            id="fish-guess-form"
            onSubmit={(e) => {
              e.preventDefault();
              this.props.checkAnswer(fishInput);
              this.setState({ fishInput: "" });
              this.setState({ fishCount: fishCount + 1 });
            }}
          >
            <label htmlFor="fish-guess">What kind of fish is this?</label>
            <input
              type="text"
              name="fish-guess"
              onChange={(e) => {
                this.setState({ fishInput: e.target.value });
              }}
              value={fishInput}
            />
            <input type="submit" />
          </form>
        </div>
      );
    }
  }
}
