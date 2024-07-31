import React, {useState} from "react";

const FetchBooks = ({ title, bookImg, description }) => {
  return (
    <div className="fetched-book-container">
      <h1>{title}</h1>
      <img src={`${bookImg}`} alt="" />
      <p>{description}</p>
    </div>
  )
}

export default FetchBooks;