import React from "react";
import Spline from '@splinetool/react-spline';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom"
import ExploreAllBooks from "./ExploreAllBooks";
import ExploreGenres from "./ExploreGenres";
import ExploreBestSellers from "./ExploreBestSellers";
import ExploreBooksAPI from "./ExploreBooksAPI";
import SearchBooks from "./exploreroutes/SearchBooks";

const Explore = () => {
  return (
    <>
    <h1 className="explore-header">Explore all kinds of books</h1>
    <div className="explore-container">
      <ExploreAllBooks />
      <ExploreGenres />
      <ExploreBestSellers />
    </div>
    </>
  )
}

export default Explore;