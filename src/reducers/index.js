// index.js ni vazifasi hamma reducerlarni combine qilish

import { combineReducers } from "redux";

import songListReducer from "./songListReducer";

import selectSongReducer from "./selectSongReducer";

const allReducers = combineReducers({
  selectSongReducer,
  songListReducer,
});

export default allReducers;
