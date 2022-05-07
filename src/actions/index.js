import { type } from "@testing-library/user-event/dist/type";

export const selectSongAction = (obj) => {
  return {
    type: "Selected",
    payload: obj,
  };
};
export const addSongAction = function (form) {
  return {
    type: "Add",
    payload: form,
  };
};
