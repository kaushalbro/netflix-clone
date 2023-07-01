import React from "react";
import "./MainContent.scss";

import MainContentRow_1 from "./MainContentRow_1.jsx";
import MainContentRow_2 from "./MainContentRow_2.jsx";
import MainContentRow_3 from "./MainContentRow_3.jsx";
import MainContentRow_4 from "./MainContentRow_4.jsx";

import MainContentRow_5 from "./MainContentRow_5.jsx";

import Row_seperator from "./Row_seperator";

export default function MainContent() {
  return (
    <>
      <MainContentRow_1 />
      <Row_seperator />
      <MainContentRow_2 />
      <Row_seperator />
      <MainContentRow_3 />
      <Row_seperator />
      <MainContentRow_4 />
      <Row_seperator />
      <MainContentRow_5
        heading1="Create profiles for kids"
        heading3="Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
"
        link={
          "https://occ-0-7254-3662.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
        }
      />
      <Row_seperator />
    </>
  );
}
