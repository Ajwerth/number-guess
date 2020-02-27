import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    margin-right: 5px;
  }

  input {
    padding: 5px;
  }
`;

const Input = props => {
  const { value, onChange, label } = props;
  return (
    <InputWrapper>
      <label>{label}</label>
      <input value={value} onChange={onChange} />
    </InputWrapper>
  );
};

export default Input;