import React from "react";
import "./MainContentRow_1.scss";
import featured_img from "../../Assets/featured_img_1.jpg";

export default function MainContentRow_1() {
  return (
    <div className="main_content_row_1_container">
      <div className="bg_img">
        <img src={featured_img} alt="" />
      </div>
      <div className="main_content_row_1_blur"></div>
      <div className="content">
        <h1>Unlimited movies, TV shows, and more</h1>
        <h3>Plans now start at USD2.99/month. </h3>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="register_input">
          <input type="email" placeholder="Email address" />
          <button>Get Started </button>
        </div>
      </div>
    </div>
  );
}
