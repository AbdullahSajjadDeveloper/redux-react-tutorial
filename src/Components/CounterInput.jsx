import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { addAction } from "../ReduxHandling/Actions/counterActions";
import { subAction } from "../ReduxHandling/Actions/counterActions";
import { resetAction } from "../ReduxHandling/Actions/counterActions";

const CounterInput = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div>
        <button onClick={() => dispatch(addAction())}>ADD | +</button>
        <button onClick={() => dispatch(subAction())}>SUBTRACT | -</button>
        <button onClick={() => dispatch(resetAction())}>RESET | 0</button>
      </div>
    </Fragment>
  );
};

export default CounterInput;
