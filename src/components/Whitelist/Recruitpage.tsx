import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recruitpage() {
  const param = useParams<{ userId: string }>();
  const [usedToken, setUsedToken] = React.useState<number>(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrap>
      <RecruitWrap>
        <h1>WhiteList Recruitpage</h1>
        <UserName>UserName : {param.userId}</UserName>

        <Description>token submit에 대한 주의사항 및 설명</Description>
        <input
          type="number"
          value={usedToken}
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
  width: 600px;
  height: 400px;
  border: 1px solid #ccc;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 2px 4px rgb(0 0 0 / 4%),
    0 8px 24px rgb(0 0 0 / 8%);
`;

const RecruitWrap = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
`;

const UserName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
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

export default Recruitpage;
