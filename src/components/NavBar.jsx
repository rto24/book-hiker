import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>  
        </li>
        <li>
          <Link to="/homepage">Your Books</Link>  
        </li>
        <li>
          <Link to="/explore">Explore</Link>  
        </li>
      </ul>
    </nav>  
  )
}

export default NavBar;