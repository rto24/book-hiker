import React from "react";
import Spline from '@splinetool/react-spline';
import ExploreAllBooks from "./ExploreAllBooks";
import ExploreGenres from "./ExploreGenres";
import ExploreBestSellers from "./ExploreBestSellers";
import ExploreConnects from "./ExploreConnects";

const Explore = () => {
  return (
    <>
    <h1 className="explore-header">Explore all kinds of books</h1>
    <div className="explore-container">
      <ExploreAllBooks />
      <ExploreGenres />
      <ExploreBestSellers />
      <ExploreConnects />
    </div>
    </>
  )
}

export default Explore;