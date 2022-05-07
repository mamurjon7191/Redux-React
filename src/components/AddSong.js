import React, { useState } from "react";
import { connect } from "react-redux";
import { addSongAction } from "../actions";

const AddSong = function (props) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [outhor, setOuthor] = useState("");

  const submit = function (e) {
    e.preventDefault();
    return props.addSongAction({
      name,
      time,
      outhor,
    });
  };

  return (
    <div>
      <form className="ui form" onSubmit={submit}>
        <div className="field">
          <label>Song Name</label>
          <input
            type="text"
            name="first-name"
            placeholder="Song Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label>Song time </label>
          <input
            type="text"
            name="last-name"
            placeholder="Song time"
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label>Song Author</label>
          <input
            type="text"
            name="last-name"
            placeholder="Song Author"
            onChange={(e) => {
              setOuthor(e.target.value);
            }}
          />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const getMyState = function (state) {
  return state;
};

export default connect(getMyState, {
  addSongAction,
})(AddSong);
