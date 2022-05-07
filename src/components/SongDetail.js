import React from "react";
import { connect } from "react-redux";

const SongDetail = function (props) {
  const selectedObj = props.selectSongReducer;
  console.log(props);
  const renderDetail = function () {
    if (selectedObj.name) {
      return (
        <div>
          <div className="ui card">
            <div className="image">
              <img src="https://www.schooldrillers.com/st-jairus-stainless-love/st-jairus/" />
            </div>
            <div className="content">
              <a className="header">{selectedObj.name}</a>
              <div className="meta">
                <span className="date">{selectedObj.time}</span>
              </div>
              <div className="description">{selectedObj.authhor}</div>
            </div>
            <div className="extra content">
              <a>
                <i className="user icon"></i>
                22 Downloads
              </a>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  };
  return <div>{renderDetail()}</div>;
};

const getMyState = function (state) {
  return state;
};

export default connect(getMyState)(SongDetail);
