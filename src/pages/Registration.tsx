import { useEffect, useState } from "react";
import styled from "styled-components";

interface Proposal {
  id: number;
  title: string;
  description: string;
  reward: number;
}

function Registration() {
  const [proposals, setProposals] = useState<Proposal>({
    id: 0,
    title: "",
    description: "",
    reward: 0,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrap>
      <h1>안건 등록</h1>
      <Description>token submit에 대한 주의사항 및 설명</Description>

      <InputWrap>
        <div>안건 제목: </div>
        <input
          type="text"
          value={proposals?.title}
          onChange={(e) =>
            setProposals({ ...proposals, title: e.target.value })
          }
        />
      </InputWrap>
      <InputWrap>
        <div>안건 설명: </div>
        <input
          type="text"
          value={proposals?.description}
          onChange={(e) =>
            setProposals({ ...proposals, description: e.target.value })
          }
        />
      </InputWrap>

      <InputWrap>
        <div>Reward로 제공할 staking </div>
        <input
          type="number"
          value={proposals?.reward}
          onChange={(e) =>
            setProposals({ ...proposals, reward: Number(e.target.value) })
          }
        />
      </InputWrap>
      <div>Used Token : {proposals.reward}</div>
      <Button>Submit</Button>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  width: 600px;
  height: 550px;
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
const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 500px;
  height: 50px;
  input {
    width: 300px;
    height: 30px;
    margin-left: 10px;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
  margin-top: 10px;
`;

export default Registration;
