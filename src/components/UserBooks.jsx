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

// const handleUpdateClick

const UserBook = ({ id, title, message, rating }) => {
//form popup update
  //edit button toggles form visibility using state
  //create use state for title, message, rating and set initial state to those current values
  //once update form is submitted, update state of each with whatever is currently written
  const [formVisibility, setFormVisibility] = useState(false);
  const [newBookTitle, setBookTitle] = useState(title);
  const [newMessage, setMessage] = useState(message);
  const [newRating, setRating] = useState(rating);

  useEffect(() => {
    setBookTitle(title);
    setMessage(message);
    setRating(rating);
  }, [title, message, rating])

  const toggleForm = () => {
    setFormVisibility(!formVisibility);
  }
  
  const newBookTitleUpdate = (event) => {
    setBookTitle(event.target.value);
  }

  const newMessageUpdate = (event) => {
    setMessage(event.target.value);
  }

  const newRatingUpdate = (event) => {
    setRating(event.target.value);
  }

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/home/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookTitle: newBookTitle,
          userMessage: newMessage,
          rating: newRating
        })
      })
      if (response.ok) {
        console.log('Book updated');
        window.location = window.location.href;
      } else {
        console.log('Error', response.statusText)
      }
    } catch (error) {
      console.log('Error:', error)
    }
  };

  return (
    <>
    <div className='user-book fade-in-right'>
      <button onClick={() => handleClick(id)} className="book-delete">X</button>
      <button onClick={() => toggleForm()}>Edit</button>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Message:</strong> {message}</p>
      <p><strong>Rating:</strong> {rating}</p>
    </div>
    {formVisibility && (
      <div className="update-form">
        <button onClick={() => toggleForm()}>X</button>
        <form onSubmit={handleUpdateSubmit}>
          <label> Book Title:
            <input required type="text" value={newBookTitle} onChange={newBookTitleUpdate}/>
          </label>
          <label> Message:
            <input required type="text" value={newMessage} onChange={newMessageUpdate}/>
          </label>
          <label> Rating:
            <input required type="text" value={newRating} onChange={newRatingUpdate}/>
          </label>
          <button type="submit">Update</button>
        </form>
      </div>
    )}
    </>
  )
}

export default UserBook;