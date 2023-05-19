import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function ProposalDetail() {
  const { proposalTitle } = useParams();
  // 가정: 아래 정보들은 API나 상태 관리를 통해 가져온다고 가정합니다.
  const proposal = {
    title: "title1",
    status: "프로포절 상태",
    deadline: "프로포절 마감일",
    voteRatio1: 60,
    voteRatio2: 30,
    voteRatio3: 10,

    votesFor: 3,
    votesAgainst: 2,
    totalVotes: 5,

    userList: [
      {
        id: 1,
        name: "John Doe",
        vote: "찬성",
        param1: 10,
        param2: 20,
        param3: 30,
      },
      {
        id: 2,
        name: "Jane Doe",
        vote: "반대",
        param1: 30,
        param2: 20,
        param3: 10,
      },
    ],
  };

  return (
    <>
      <Title>{proposal.title}</Title>
      <Status>{proposal.status}</Status>
      <Deadline>{proposal.deadline}</Deadline>
      <VoteRatio>
        <VoteRatioItem>{proposal.voteRatio1}%</VoteRatioItem>
        <VoteRatioItem>{proposal.voteRatio2}%</VoteRatioItem>
        <VoteRatioItem>{proposal.voteRatio3}%</VoteRatioItem>
      </VoteRatio>
      <VoteResult>
        투표 결과: {proposal.votesFor}
        찬성, {proposal.votesAgainst} 반대, 총 {proposal.totalVotes} 표
      </VoteResult>
      <UserList>
        {proposal.userList.map((user) => (
          <UserListItem key={user.id}>
            <UserName>{user.name}</UserName>
            <UserVote vote={user.vote}>{user.vote}</UserVote>
          </UserListItem>
        ))}
      </UserList>
    </>
  );
}

export default ProposalDetail;

// 제목을 표시하는 컴포넌트
const Title = styled.h1`
  color: #333;
  font-size: 24px;
`;

// 상태를 표시하는 컴포넌트
const Status = styled.p`
  color: #777;
  font-size: 16px;
`;

// 마감일을 표시하는 컴포넌트
const Deadline = styled.p`
  color: #777;
  font-size: 14px;
`;

// 찬성 및 반대 투표 비율을 표시하는 컴포넌트
const VoteRatio = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

// 각 투표 비율을 표시하는 컴포넌트
const VoteRatioItem = styled.span`
  color: #333;
  font-size: 14px;
`;

// 투표 결과를 표시하는 컴포넌트
const VoteResult = styled.div`
  margin-top: 10px;
`;

// 사용자 목록을 표시하는 컴포넌트
const UserList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

// 사용자 아이템을 표시하는 컴포넌트
const UserListItem = styled.li`
  margin-bottom: 5px;
`;

// 각 사용자의 이름을 표시하는 컴포넌트
const UserName = styled.span`
  color: #333;
  font-size: 16px;
`;

const UserVote = styled.span<{ vote: string }>`
  color: ${(props) => (props.vote === "찬성" ? "green" : "red")};
  font-size: 14px;
`;
