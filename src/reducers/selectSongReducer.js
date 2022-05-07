const selectSongReducer = (history = [], form) => {
  if (form.type == "Selected") {
    return (history = form.payload);
  }
  return history;
};

export default selectSongReducer;

// Reducer har doim nimadur qaytarishi --> return history
