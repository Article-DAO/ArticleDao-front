import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Pending() {
  const param = useParams<{ userId: string }>();
  const [selectedOption, setSelectedOption] = useState<string>("");
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <>
      <Wrap>
        <h1>WhiteList Pending</h1>
        <div>{param.userId}</div>
        <ButtonWrap>
          <StyledButton onClick={() => handleOptionSelect("O")}>O</StyledButton>
          <StyledButton2 onClick={() => handleOptionSelect("X")}>
            X
          </StyledButton2>
        </ButtonWrap>
        <p>Selected Option: {selectedOption}</p>
        <button>Submit</button>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  display: flex;
  width: 600px;
  height: 400px;
  border: 1px solid black;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
`;

const StyledButton = styled.button`
  background-color: #2ff215;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #148604;
  }
`;
const StyledButton2 = styled.button`
  background-color: #ea0707;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ab0909;
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;

export default Pending;
