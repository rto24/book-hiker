import React, {useState, useEffect} from "react";

const ExploreBooksAPI = () => {
const [search, setSearch] = useState('');
const [fetchedBooks, setFetchedBooks] = useState([]);
const [searchBool, setSearchBool] = useState(false);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCLPVcHdnZjNGc4UHqrQ4YHJ9eWRFYRDEA`)
    .then(response => response.json())
    .then(data => {
      setFetchedBooks(data.items);
    //   console.log(data.items[1].volumeInfo.title);
    //   console.log('fetchedbooks', fetchedBooks)
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
    <div className="search-bar">
      <label> Search:
        <input type="text" value={search} onChange={searchUpdate} placeholder='Search for a book...'/>
      </label>
      <button onClick={toggleSearchBool}>Search</button>
    </div>
  )
}

export default ExploreBooksAPI;