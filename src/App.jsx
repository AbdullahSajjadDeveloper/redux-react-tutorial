import React, { Fragment } from "react";
import CounterOutput from "./Components/CounterOutput";
import CounterInput from "./Components/CounterInput";

const App = () => {
  return (
    <Fragment>
      <div>
        <CounterOutput />
        <hr></hr>
        <CounterInput />
      </div>
    </Fragment>
  );
};

export default App;
