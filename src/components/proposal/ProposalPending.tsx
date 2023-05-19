import React from "react";
import { useParams } from "react-router-dom";

function ProposalPending() {
  const param = useParams<{ userId: string }>();
  return <div>{param.userId}</div>;
}

export default ProposalPending;
