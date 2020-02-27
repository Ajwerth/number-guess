import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  button {
    font-family: sans-serif;
    font-size: 1rem;
    background-color: #447bfc;
    color: #fff;
    margin: 5px;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;

    &:hover {
      background-color: #143990;
      cursor: pointer;
    }
  }
`;

const Button = props => {
  const { text, handleClick } = props;
  return (
    <ButtonWrapper>
      <button onClick={() => handleClick()}>{text}</button>
    </ButtonWrapper>
  );
};

export default Button;