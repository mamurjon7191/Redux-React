import { type } from "@testing-library/user-event/dist/type";

const selectSongAction = (obj) => {
  return {
    type: "Selected",
    payload: obj,
  };
};

export default selectSongAction;
