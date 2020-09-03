import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./ReduxHandling/Store/store";
import "./Styles/index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <App />
    </Fragment>
  </Provider>,
  document.getElementById("root")
);
