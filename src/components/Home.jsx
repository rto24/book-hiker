// import { Route, Routes } from "react-router-dom"
import React from "react";
import Spline from '@splinetool/react-spline';

const Home = () => {
  return (
    <div className="home-container">
       <h1 className="home-header fade-in-top">BookHiker</h1>
       <h4 className="home-subtext fade-in-bottom">A digital home for your book collections</h4>
       <Spline className="home-spline"
        scene="https://prod.spline.design/fuDpuaZTwXb1lgFn/scene.splinecode" 
      />
    </div>
  )
}

export default Home;