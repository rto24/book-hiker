import React from "react";
import Spline from '@splinetool/react-spline';
import ExploreAllBooks from "./ExploreAllBooks";

const Explore = () => {
  return (
    <>
    <h1 className="explore-header">Explore all kinds of books</h1>
    <div className="explore-container">
      <ExploreAllBooks />
    </div>
    </>
  )
}

export default Explore;