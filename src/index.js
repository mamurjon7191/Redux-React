import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux"; // store yaratib olish
import { Provider } from "react-redux"; // store bilan appni boglaash uchun

import App from "./components/App.js";
import allReducers from "./reducers/index.js";

ReactDOM.render(
  <Provider store={createStore(allReducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
