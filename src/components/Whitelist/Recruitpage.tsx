import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recruitpage() {
  const param = useParams<{ userId: string }>();
  const [usedToken, setUsedToken] = React.useState<number>(0);
  return (
    <Wrap>
      <RecruitWrap>
        <h1>WhiteList Recruitpage</h1>
        <div>UserName : {param.userId}</div>
        <input
          type="number"
          onChange={(e) => setUsedToken(Number(e.target.value))}
        />
        <div>Used Token : {usedToken}</div>
        <button>Submit</button>
      </RecruitWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;

const RecruitWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Recruitpage;
