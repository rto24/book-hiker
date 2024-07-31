import React, { useState, useEffect } from "react";

const BookCreator = () => {
  const [bookTitleInput, setBookTitleInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [ratingInput, setRatingInput] = useState(0);

  const bookTitleUpdate = (event) => {
    setBookTitleInput(event.target.value);
  }

  const messageInputUpdate = (event) => {
    setMessageInput(event.target.value);
  }

  const ratingInputUpdate = (event) => {
    setRatingInput(event.target.value);
  }

  const handleSubmit = async (event) => {
    //make POST request to backend
    event.preventDefault();
      try {
        const response = await fetch("/api/home", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            bookTitle: bookTitleInput,
            userMessage: messageInput,
            rating: ratingInput
          })
        });
        if (response.ok) {
          const data = await response.json();
          console.log('Successful POST', data);
        } else {
          console.log('Error uhoh', response.statusText);
        }
        setBookTitleInput('');
        setMessageInput('');
        setRatingInput(0);
        window.location = window.location.href;
      } catch (error) {
        console.error('Error:', error);
      }
  };

  return (
    <>
      <form className="form fade-in-left" onSubmit={handleSubmit}>
        <label> <strong>Book Title:</strong>
          <input required type="text" value ={bookTitleInput} onChange={bookTitleUpdate} className="title-input"></input> 
        </label>
        <label> <strong>Message:</strong>
          <input required type="text" value={messageInput} onChange={messageInputUpdate} className="message-input"></input> 
        </label>
        <label> <strong>Rating:</strong>
          <input required type="number" value={ratingInput} onChange={ratingInputUpdate} className="rating-input"></input> 
        </label>
        <button type={'submit'} className="add-book-btn">Add Book</button>
      </form>
    </>
  )
}

export default BookCreator;