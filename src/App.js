import React, { useState } from "react";
import Guess from "./components/Guess";
import "./App.css";
import GameConfig from "./components/GameConfig";
import { randInt } from "./utils";

export default function App() {
  const [lower, setLower] = useState(1);
  const [upper, setUpper] = useState(10);
  const [guess, setGuess] = useState("");
  const [lastGuess, setLastGuess] = useState("");
  const [number, setNumber] = useState(randInt(1, 10));
  const [hint, setHint] = useState("");

  return (
    <div className="App">
      <h1>Play!</h1>
      <p>
        Guess the number between {lower} and {upper}
      </p>
      <Guess
        setGuess={setGuess}
        guess={guess}
        lastGuess={lastGuess}
        setLastGuess={setLastGuess}
        number={number}
        hint={hint}
        setHint={setHint}
        lower={lower}
        upper={upper}
        setNumber={setNumber}
      />

      <GameConfig
        lower={lower}
        setLower={setLower}
        upper={upper}
        setUpper={setUpper}
        number={number}
        setNumber={setNumber}
        setLastGuess={setLastGuess}
        setHint={setHint}
      />
    </div>
  );
}
