import React from "react";

const State = ({ printState }) => {
  return (
    <div>
      <p> State </p> <hr />
      <pre>
        productsInCart <br />
        {JSON.stringify(printState, null, 1)}
      </pre>
    </div>
  );
};

export default State;
