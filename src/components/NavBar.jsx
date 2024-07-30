import React from "react";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/home">Home</a>  
        </li>
        <li>
          <a href="/">Your Books</a>  
        </li>
        <li>
          <a href="/explore">Explore</a>  
        </li>
      </ul>
    </nav>  
  )
}

export default NavBar;