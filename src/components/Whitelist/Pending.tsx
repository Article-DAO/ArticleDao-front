import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Pending() {
  const param = useParams<{ userId: string }>();
  const [selectedOption, setSelectedOption] = useState<boolean>(true);
  const handleOptionSelect = (option: boolean) => {
    setSelectedOption(option);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Wrap>
        <PendingWrap>
          <h1>WhiteList Pending</h1>
          <UserName>UserName : {param.userId}</UserName>
          <Description>token submit에 대한 주의사항 및 설명</Description>
          <ButtonWrap>
            <StyledButton onClick={() => handleOptionSelect(true)}>
              O
            </StyledButton>
            <StyledButton2 onClick={() => handleOptionSelect(false)}>
              X
            </StyledButton2>
          </ButtonWrap>
          <Selected isSelected={selectedOption}>
            {selectedOption === true ? "O" : "X"}
          </Selected>
          <button>Submit</button>
        </PendingWrap>
      </Wrap>
    </>
  );
}

const Selected = styled.div<{ isSelected: boolean }>`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${(props) => (props.isSelected ? "green" : "red")};
`;

const Wrap = styled.div`
  display: flex;
  width: 600px;
  height: 500px;
  border: 1px solid #ccc;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 2px 4px rgb(0 0 0 / 4%),
    0 8px 24px rgb(0 0 0 / 8%);
`;

const Description = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 15px;
  font-weight: bold;
  width: 500px;
  height: 100px;
  margin-bottom: 20px;
  background-color: #eee;
`;

const PendingWrap = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
`;

const UserName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
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
