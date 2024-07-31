import React from "react";
import Spline from '@splinetool/react-spline';
import ExploreAllBooks from "./ExploreAllBooks";
import ExploreGenres from "./ExploreGenres";
import ExploreBestSellers from "./ExploreBestSellers";
import ExploreBooksAPI from "./ExploreBooksAPI";

const Explore = () => {
  return (
    <>
    <h1 className="explore-header">Explore all kinds of books</h1>
    <div className="explore-container">
      <ExploreAllBooks />
      <ExploreGenres />
      <ExploreBestSellers />
      <ExploreBooksAPI />
    </div>
    </>
  )
}

export default Explore;