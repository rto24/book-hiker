import React, {useState} from "react";

const FetchBooks = ({ title, bookImg, description }) => {
  const [active, setActive] = useState('');

  const handleStar = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/explore", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planToRead: title,
          bookImg: bookImg,
        })
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Sucessful POST', data);
        setActive('active');
      } else {
        console.log('Error', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="fetched-book">
      <button onClick={handleStar} className={`plan-to-read-btn ${active}`}>☆</button>
      <h1>{title}</h1>
      <img src={`${bookImg}`} alt="" className="book-img"/>
      <p>{description}</p>
    </div>
  )
}

export default FetchBooks;