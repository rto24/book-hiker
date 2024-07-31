//return a div containing individual book data
//look at market file from Unit 10
import React, {useState, useEffect} from "react";

const handleClick = async (id) => {
  try {
    const response = await fetch(`/api/home/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    if (response.ok) {
      console.log('Book deleted');
      window.location = window.location.href;
    } else {
      console.log('Error uhoh', response.statusText);
    }
  } catch (error) {
    console.log('Error:', error)
  }
};

const UserBook = ({ id, title, message, rating }) => {
  return (
    <div className='user-book fade-in-right'>
      <button onClick={() => handleClick(id)} className="book-delete">X</button>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Message:</strong> {message}</p>
      <p><strong>Rating:</strong> {rating}</p>
    </div>
  )
}

export default UserBook;