import React from "react";
import SongDetail from "./SongDetail.js";
import SongList from "./SongList.js";

const App = function (props) {
  console.log(props);
  return (
    <div className="ui grid container">
      <div className="eight wide column">
        <SongList />
      </div>
      <div className="eight wide column">
        <SongDetail />
      </div>
    </div>
  );
};
export default App;
