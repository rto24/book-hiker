import React, {useState, useEffect} from "react";
import FetchBooks from "./FetchedBooks";

const ExploreBooksAPI = () => {
const [search, setSearch] = useState('');
const [fetchedBooks, setFetchedBooks] = useState([]);
const [searchBool, setSearchBool] = useState(false);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=20&key=AIzaSyCLPVcHdnZjNGc4UHqrQ4YHJ9eWRFYRDEA`)
    .then(response => response.json())
    .then(data => {
      setFetchedBooks(data.items || []);
    })
    .catch(error => console.log(error))
  }, [searchBool])

  const searchUpdate = (event) => {
    setSearch(event.target.value);
  }

  const toggleSearchBool = () => {
    setSearchBool(!searchBool);
  }

  console.log('fetched', fetchedBooks);

  return (
    <>
    <div className="search-bar">
      <label> Search:
        <input type="text" value={search} onChange={searchUpdate} placeholder='Search for a book...'/>
      </label>
      <button onClick={toggleSearchBool}>Search</button>
    </div>

    <div className="fetched-books-container">
      {console.log(fetchedBooks)}
      {searchBool && fetchedBooks.map((obj, index) => {
        const title = obj.volumeInfo.title;
        const bookImg = obj.volumeInfo.imageLinks.thumbnail || obj.volumeInfo.imageLinks.smallThumbnail;
        const description = obj.volumeInfo.description;

        return <FetchBooks title={title} bookImg={bookImg} description={description} key={index}/>
      })}
    </div>
    </>
  )
}

export default ExploreBooksAPI;