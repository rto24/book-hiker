import React, {useState, useEffect} from 'react';
import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom"
import './App.css';

const App = () => {
  
  return (
    <>
    <NavBar />
    <div>
      <h1>BookHiker</h1>
        <Routes>
          <Route path="/" element={<MainContainer />} />
        </Routes>
    </div>
    </>
  )
}

export default App;