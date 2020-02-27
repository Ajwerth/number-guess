import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import styled from "styled-components";

const ConfigWrapper = styled.div`
  .configHide {
    display: none;
  }

  .configShow {
    display: block;
  }
`;

const GameConfig = ({ lower, setLower, upper, setUpper }) => {
  // Keeping this state in here since it is strictly for this component
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    toggle === false ? setToggle(true) : setToggle(false);
  };

  return (
    <ConfigWrapper>
      <Button text="Configure" handleClick={handleClick} />
      <div
        id="config"
        className={toggle === false ? "configHide" : "configShow"}
      >
        <Input
          label="Lower bound:"
          value={lower}
          onChange={e => setLower(e.target.value)}
        />
        <Input
          label="Upper bound:"
          value={upper}
          onChange={e => setUpper(e.target.value)}
        />
      </div>
    </ConfigWrapper>
  );
};

export default GameConfig;