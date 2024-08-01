import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/homepage">Home</Link>  
        </li>
        <li>
          <Link to="/">Your Books</Link>  
        </li>
        <li>
          <Link to="/explore">Explore</Link>  
        </li>
        <li>
          <Link to="/plan-to-read">Plan To Read</Link>
        </li>
      </ul>
    </nav>  
  )
}

export default NavBar;