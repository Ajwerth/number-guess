import React from "react";
import Button from "./Button";
import Input from "./Input";
import { checkGuess } from "../utils";
import styled from "styled-components";
import { randInt } from "../utils";

const GuessWrapper = styled.div`
  .info {
  }

  .input-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Guess = ({
  guess,
  setGuess,
  lastGuess,
  setLastGuess,
  number,
  hint,
  setHint,
  lower,
  upper,
  setNumber
}) => {
  const makeGuess = () => {
    let curHint = checkGuess(number, guess, { setHint });
    setHint(curHint);
    setLastGuess(guess);
  };

  const reset = () => {
    const number = randInt(lower, upper);
    setNumber(number);
    setLastGuess("");
    setHint("");
  };

  return (
    <GuessWrapper>
      <div className="info">
        <h4>Hint: {hint}</h4>
        <p>Last guess: {lastGuess}</p>
      </div>
      <div className="input-section">
        <Input
          label="Guess:"
          value={guess}
          onChange={e => setGuess(e.target.value)}
        />
        <Button id="makeGuess" text={"Make Guess"} handleClick={makeGuess} />
        <Button id="reset" text={"Reset"} handleClick={reset} />
      </div>
    </GuessWrapper>
  );
};

export default Guess;