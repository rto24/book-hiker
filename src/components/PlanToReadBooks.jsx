import React from "react";

const PlanToReadBooks = ({ id, title, bookImg }) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/explore/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
      })
      if (response.ok) {
        console.log('Book deleted');
        alert('Book deleted!')
      } else {
        console.log('Error', response.statusText);
      }
    } catch (error) {
      console.log('Error', error);
    }
  }
  
  return (
    <div className="ptrBook">
      <h2 className="ptr-book-title">{title}</h2>
      <img src={`${bookImg}`} alt="" className="book-img"/>
      <button onClick={() => handleDelete(id)} className="ptr-delete-btn">X</button>
    </div>
  )
}

export default PlanToReadBooks;