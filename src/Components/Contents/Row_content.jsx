import React from "react";
import "./Row_content.scss";

function Row_content(props) {
  // const col_order = props.col_order;
  const col_1_img_path = props.img_path;
  const col_2_heading = props.heading;
  const col_2_sub_heading = props.sub_heading;
  const div_css = props.css;

  return (
    <div className="row_content">
      <div className={`col_1 ${div_css}`}>
        <img className="col_1_img" src={col_1_img_path} alt="" />
        {/* if component is used for download show content */}
        {props.name === "download_content" && (
          //   <div className="download_show_container">
          <div className="download_shows">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt=""
            />
            <h3>
              Stranger Things <br />
              <span>Downlaoding...</span>
            </h3>
            <div></div>
            <div className="downloading_animation"></div>
          </div>
          //   </div>
        )}
      </div>
      <div className="col_2">
        <h1>{col_2_heading}</h1>
        <h3>{col_2_sub_heading}</h3>
      </div>
    </div>
  );
}

export default Row_content;
