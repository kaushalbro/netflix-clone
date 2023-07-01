import React from "react";
import "./MainContentRow_3.scss";
function MainContentRow_3() {
  return (
    <div className="MainContentRow_3_container">
      <div className="col_1">
        <img
          className="col_1_img"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt=""
        />
        <div className="col_1_r_1">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
            alt=""
          />
          <h3>
            Stranger Things <br />
            <span>Downlaoding...</span>
          </h3>
          <div></div>
          <div className="downloading_animation">
            hell
          </div>
        </div>
      </div>
      <div className="col_2">
        <h1>Download your shows to watch offline</h1>
        <h3>Save your favorites easily and always have something to watch.</h3>
      </div>
    </div>
  );
}

export default MainContentRow_3;
