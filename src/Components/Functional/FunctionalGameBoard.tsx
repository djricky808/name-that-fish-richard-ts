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
  checkAnswer,
}: {
  fishCount: number;
  checkAnswer: (fishInput: string) => void;
}) {
  const [fishInput, setFishInput] = useState("");
  const nextFishToName = initialFishes[fishCount];

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
