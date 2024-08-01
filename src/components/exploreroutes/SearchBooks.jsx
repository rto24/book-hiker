import React from "react";
import ExploreBooksAPI from "../ExploreBooksAPI";

const SearchBooks = () => {
  return (
    <>
    <h1 className="search-header">Search for new books to add to your read list</h1>
    <div className="search-container">
      <ExploreBooksAPI />
    </div>
    </>
  )
}

export default SearchBooks;