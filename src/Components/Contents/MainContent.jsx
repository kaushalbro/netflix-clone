import React from "react";
import "./MainContent.scss";
import "./common_css.scss";
import Row_content from "./Row_content.jsx";
import MainContentRow_1 from "./MainContentRow_1.jsx";
import Row_seperator from "./Row_seperator";

export default function MainContent() {
  return (
    <>
      <MainContentRow_1 />
      <Row_seperator />
      <Row_content
        name=""
        css="order_1"
        heading="Enjoy on your TV"
        sub_heading="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        img_path="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
      />
      <Row_seperator />
      <Row_content
        name="download_content"
        css="order_0"
        heading="Download your shows to watch offline"
        sub_heading="Save your favorites easily and always have something to watch."
        img_path="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
      />
      <Row_seperator />
      <Row_content
        name=""
        css="order_1"
        heading="Watch everywhere"
        sub_heading="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        img_path="https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      />
      <Row_seperator />
      <Row_content
        css="order_0"
        heading="Create profiles for kids"
        sub_heading="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        img_path="https://occ-0-7254-3662.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
      />
      <Row_seperator />
    </>
  );
}
