import React from "react";
import { connect } from "react-redux"; // provider bilan connect qilish uchun
import selectSongAction from "../actions";

const SongList = function (props) {
  console.log(props);
  const renderHtml = function () {
    return props.songListReducer.map((val) => {
      return (
        <div className="card" key={val.name}>
          <div className="content">
            <img
              className="right floated mini ui image"
              src="https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg"
            />
            <div className="header">{val.name}</div>
            <div className="meta">{val.authhor}</div>
            <div className="description">{val.time}</div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div
                className="ui basic green button"
                onClick={() => {
                  selectSongAction(val); //bosildi action creator ishladi val kirib keldi u bizga abyect qaytarib reducerga berdi reducer statega borib yozib qoydi...
                }}
              >
                Select
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return <div className="ui cards">{renderHtml()}</div>;
};

const getMyState = function (state) {
  return state;
};

export default connect(getMyState)(SongList); // high ordered function // connect borib providerdagi funksiyalarni ishlatib statega yozib keladi

//---------->>>>>>>Connectni ishlashi<<<<<<<<<<------------------\\

// const connectedA = (getMyState, {}) => {
//   return function (SongList) {
//     <SongList props={getMyState(store.getState)} />;
//   };
// };
