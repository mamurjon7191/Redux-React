import React, { useState } from "react";
import SongDetail from "./SongDetail.js";
import SongList from "./SongList.js";
import Header from "./Header.js";
import AddSong from "./AddSong.js";

const App = function (props) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Header />
      <button
        className="ui button"
        onClick={() => {
          setShow(!show);
        }}
      >
        Add Song
      </button>
      <div>{show ? <AddSong /> : ""}</div>
      <div className="ui grid container">
        <div className="eight wide column">
          <SongList />
        </div>
        <div className="eight wide column">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};
export default App;
