import React, { useState, useEffect } from "react";
import BookCreator from "./BookCreator";
import BookDisplay from "./BookDisplay";
//children -> BookCreator and BookDisplay
const BookContainer = () => {
  return (
    <div className="book-container">
      <BookCreator />
      <BookDisplay />
    </div>
  )
}

export default BookContainer;