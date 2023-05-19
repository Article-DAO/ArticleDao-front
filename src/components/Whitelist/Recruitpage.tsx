import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recruitpage() {
  const param = useParams<{ userId: string }>();
  return (
    <Wrap>
      <div>UserName : {param.userId}</div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

export default Recruitpage;
