import React from 'react'
import './MainContent.scss'

import MainContentRow_1 from "./MainContentRow_1.jsx";
import MainContentRow_2 from "./MainContentRow_2.jsx";
// import MainContentRow_3 from "./MainContentRow_3.jsx";

import Row_seperator from './Row_seperator';

export default function MainContent() {
  return (
<>
    <MainContentRow_1 />
    <Row_seperator/>
    <MainContentRow_2 />
    <Row_seperator/>
    {/* <MainContentRow_2 />
    <Row_seperator/> */}
</>


    )
}
