import React from 'react';
import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Explore from './components/ExploreContainer';
import SearchBooks from './components/exploreroutes/SearchBooks';
import PlanToReadList from './components/PlanToRead';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom"
import './App.css';

const App = () => {
  
  return (
    <Router>
    <NavBar />
    <div>
      {/* <h1>BookHiker</h1> */}
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/homepage" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/plan-to-read" element={<PlanToReadList />} />
          <Route path="/explore/all-books" element={<SearchBooks />} />
        </Routes>
    </div>
    </Router>
  )
}

export default App;