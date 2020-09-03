import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const CounterOutput = () => {
  const allStates = useSelector((fetchedStates) => {
    return {
      counter: fetchedStates.counter,
    };
  });
  return (
    <Fragment>
      <div>
        <h1>Counter: {allStates.counter}</h1>
      </div>
    </Fragment>
  );
};

export default CounterOutput;
