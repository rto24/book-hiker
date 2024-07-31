import React, { useState, useEffect } from "react";
import BookContainer from "./BookContainer";
import Spline from '@splinetool/react-spline';

const MainContainer = () => {
  return (
    <>
    <div className="main-container">
      <h1 className="lib-header">Add to your library</h1>
      <Spline scene="https://prod.spline.design/SCKPWMQyHON1t542/scene.splinecode" className="blobs"/>
      <BookContainer />
    </div>
    </>
  )
}

export default MainContainer;