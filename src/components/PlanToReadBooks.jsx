import React from "react";

const PlanToReadBooks = ({ title, bookImg }) => {
  return (
    <div className="ptrBook">
      <h1 className="ptr-book-title">{title}</h1>
      <img src={`${bookImg}`} alt="" className="book-img"/>
      <button className="ptr-delete-btn">X</button>
    </div>
  )
}

export default PlanToReadBooks;