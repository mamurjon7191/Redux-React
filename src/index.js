import React from "react";

import ReactDOM from "react-dom";

import { createStore } from "redux"; // store yaratib olish

import { Provider } from "react-redux"; // reducerlar bilan appni boglash uchun malumotlarni olib kelishi uchun kerak

import allReducers from "./reducers/index.js"; // reducerlar import qilindi

import App from "./components/App.js"; //bu har doim pasroqda turishi kerak

ReactDOM.render(
  <Provider store={createStore(allReducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// Providerga storeni yaratib oldik har doim store kalit sozi bolishi kerak
