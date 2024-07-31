import React from "react";
import { Link } from "react-router-dom"

const ExploreAllBooks = () => {
  return (
    <div className="explore-all">
      <h1 className="explore-all-header">Go on a journey and find more books here</h1>
      <button className="arrow-btn">
        <Link to="/explore/all-books">→</Link>
      </button>
    </div>
  )
}

export default ExploreAllBooks;