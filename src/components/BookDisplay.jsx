// fetch the user book list from database
// iterate over this data to create displays using individual UserBook components 
import React, { useState, useEffect } from "react";
//need to import UserBooks still
import UserBook from "./UserBooks";

const BookDisplay = () => {
    const [bookData, setBookData] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading status
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("/api/home", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          });
  
          if (response.ok) {
            const data = await response.json();
            setBookData(data);
          } else {
            console.error('Error fetching data:', response.statusText);
          }
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setLoading(false); // Set loading to false after data is fetched
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) return <p>Loading...</p>; 
    if (bookData.length === 0) return <p>No data available.</p>;

    return (
      <div className='book-display-container'>
        <h3>Your Books</h3>
        {bookData.map((obj, index) => {
          const keys = Object.keys(obj);
          const title = obj[keys[1]];
          const message = obj[keys[2]];
          const rating = obj[keys[3]]; 

          //pass down each constant to UserBooks when made
          <UserBook title={title} message={message} rating={rating} key={index}/>
        })}

      </div>  
    )   
}

export default BookDisplay;