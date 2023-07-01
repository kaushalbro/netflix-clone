import React from "react";
import "./MainContentRow_3.scss";
function MainContentRow_5(props) {
  return (
    <div className="MainContentRow_3_container">
      <div className="col_1">
        <img
          className="col_1_img"
          src={props.link}
          alt=""
        />
      </div>
      <div className="col_2">
        <h1>{props.heading1}</h1>
        <h3>{props.heading3}</h3>
      </div>
    </div>
  );
}

export default MainContentRow_5;
