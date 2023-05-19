import { Link } from "react-router-dom";
import styled from "styled-components";
import ProposalBox from "../components/proposal/ProposalBox";

interface ProposalComponentProps {
  title: string;
  status: string;
  deadline: string;
  votesFor: number;
  votesAgainst: number;
  totalVotes: number;
}

const Proposal = () => {
  const proposals: ProposalComponentProps[] = [
    {
      title: "title1",
      status: "프로포절 상태",
      deadline: "프로포절 마감일",
      votesFor: 3,
      votesAgainst: 2,
      totalVotes: 5,
    },
    {
      title: "title2",
      status: "프로포절 상태",
      deadline: "프로포절 마감일",
      votesFor: 5,
      votesAgainst: 3,
      totalVotes: 8,
    },
  ];

  return (
    <Container>
      <Header>
        <Title>Title</Title>
        <Title>State</Title>
        <Title>Deadline</Title>
        <Title>Votes</Title>
      </Header>
      <Content>
        {proposals.map((proposal, index) => (
          <ProposalBox key={index} proposal={proposal} />
        ))}
      </Content>
    </Container>
  );
};

export default Proposal;

// const Wrap = styled.div`
//   display: flex;
//   padding: 20px;
//   flex-direction: column;
//   justify-content: center;
// `;

// const Title = styled.h1`
//   color: #1f2937;
//   text-shadow: 1px 1px 2px #e5e7eb;
//   font-size: 3xl;

//   font-weight: 800;
//   margin-top: 0;
//   margin-bottom: 0.75rem;
// `;

// const ProposalContainer = styled.div`
//   padding: 10px;
//   border: 1px solid #ccc;
//   margin-bottom: ;

//   &:hover {
//     cursor: pointer;
//     box-shadow: 0 0 0 2px rgb(0 0 0 / 4%), 0 3px 5px rgb(0 0 0 / 4%),
//       0 10px 32px rgb(0 0 0 / 8%);
//   }
// `;

// const ProposalTitle = styled.h1`
//   /* 스타일링을 원하는 대로 추가하세요 */
// `;

// const ProposalInfo = styled.div`
//   /* 스타일링을 원하는 대로 추가하세요 */
// `;

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Header = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 4fr 2fr 5fr;
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 16px;
`;

const Content = styled.div`
  margin-top: 10px;
`;

const Status = styled.p`
  margin-bottom: 5px;
`;

const Deadline = styled.p`
  margin-bottom: 5px;
`;

const Votes = styled.p`
  margin-bottom: 5px;
`;
