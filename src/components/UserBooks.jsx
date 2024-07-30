//return a div containing individual book data
//look at market file from Unit 10
import React, {useState, useEffect} from "react";

const UserBook = ({ title, message, rating }) => {
  return (
    <div className='user-book fade-in-right'>
      <p>Title: {title}</p>
      <p>Message: {message}</p>
      <p>Rating: {rating}</p>
    </div>
  )
}

export default UserBook;