import { type } from "@testing-library/user-event/dist/type";

const selectSong = (obj) => {
  return {
    type: "Selected",
    payload: obj,
  };
};

export default selectSong;
