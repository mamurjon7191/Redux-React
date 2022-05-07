import React from "react";

const Header = function () {
  return (
    <div style={{ marginBottom: "50px" }}>
      <div className="ui inverted menu">
        <a className="active item">Home</a>
        <a className="item">Musics</a>
        <a className="item">Add Songs</a>
      </div>
    </div>
  );
};
export default Header;
