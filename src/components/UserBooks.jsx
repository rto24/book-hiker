//return a div containing individual book data
//look at market file from Unit 10
import React, {useState, useEffect} from "react";

const UserBook = ({ title, message, rating }) => {
  return (
    <div className='user-book fade-in-right'>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Message:</strong> {message}</p>
      <p><strong>Rating:</strong> {rating}</p>
    </div>
  )
}

export default UserBook;