import React, {useState} from "react";

const FetchBooks = ({ title, bookImg, description }) => {
  return (
    <div className="fetched-book-container">
      <button className="plan-to-read-btn">☆</button>
      <h1>{title}</h1>
      <img src={`${bookImg}`} alt="" />
      <p>{description}</p>
    </div>
  )
}

export default FetchBooks;