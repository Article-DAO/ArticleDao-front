import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function WhiteUser() {
  const { userId } = useParams();

  // 가정: 아래 정보들은 API나 상태 관리를 통해 가져온다고 가정합니다.
  const user = {
    id: 1,
    name: "사용자 이름",
    postCount: 10,
    contribution: 75,
    tokenCount: 50,
    twitter: "twitter.com/사용자_트위터",
  };

  return (
    <Wrap>
      <h1>Whitelist User {userId}</h1>
      <p>ID: {user.id}</p>
      <p>이름: {user.name}</p>
      <p>쓴 글의 개수: {user.postCount}</p>
      <p>기여도: {user.contribution}</p>
      <p>가지고 있는 토큰의 개수: {user.tokenCount}</p>
      <p>
        Twitter: <a href={user.twitter}>{user.twitter}</a>
      </p>
    </Wrap>
  );
}

export default WhiteUser;

const Wrap = styled.div`
  padding: 20px;
  background-color: #fff;
  margin: 20px auto;
  max-width: 800px;
`;
