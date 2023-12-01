import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";

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

export function FunctionalGameBoard({
  fishCount,
  setFishCount,
  checkAnswer,
  answers,
}: {
  fishCount: number;
  setFishCount: (fishCount: number) => void;
  checkAnswer: (fishInput: string) => void;
  answers: string[];
}) {
  const [fishInput, setFishInput] = useState("");
  const nextFishToName = initialFishes[fishCount];

  if (answers.length !== 0) {
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            checkAnswer(fishInput);
            setFishInput("");
            setFishCount(fishCount + 1);
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            onChange={(e) => {
              setFishInput(e.target.value);
            }}
            value={fishInput}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
