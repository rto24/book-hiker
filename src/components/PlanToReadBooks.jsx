import React from "react";

const PlanToReadBooks = ({ title, bookImg }) => {
  return (
    <div className="ptrBook">
      <h1>{title}</h1>
      <img src={`${bookImg}`} alt="" />
    </div>
  )
}

export default PlanToReadBooks;