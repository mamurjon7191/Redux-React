import { combineReducers } from "redux";
const songList = [
  { name: "Uzbek", time: "2:22", authhor: "Ibragimov" },
  { name: "Tajik", time: "2:42", authhor: "Yoldoshev" },
  { name: "Rus", time: "2:12", authhor: "Chagayev" },
  { name: "Usa", time: "2:42", authhor: "Hotamov" },
];

const songListReducer = (history = songList, song) => {
  return history;
};

const selectSongReducer = (history = [], selectedSong) => {
  if (selectedSong.type == "Selected") {
    return (history = selectedSong.payload);
  }
  return history;
};

const allReducers = combineReducers({
  songList: songListReducer,
  selectedSong: selectSongReducer,
});

export default allReducers;
