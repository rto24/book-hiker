import React from 'react';
import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';
import Home from './components/Home'
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
        </Routes>
    </div>
    </Router>
  )
}

export default App;