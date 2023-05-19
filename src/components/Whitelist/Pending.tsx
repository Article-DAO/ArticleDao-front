import React from "react";
import { useParams } from "react-router-dom";

function Pending() {
  const param = useParams<{ userId: string }>();
  return <div>{param.userId}</div>;
}

export default Pending;
