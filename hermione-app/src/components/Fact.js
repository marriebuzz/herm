import React from "react";
import { useParams } from "react-router-dom";
import facts from "../data";

const Fact = () => {
  const { factId } = useParams();
  const fact = facts.find((f) => f.id === parseInt(factId));

  if (!fact) {
    return <h2>Fact not found</h2>;
  }

  return (
    <div>
      <h2>Fact {fact.id}</h2>
      <p>{fact.text}</p>
    </div>
  );
};

export default Fact;
