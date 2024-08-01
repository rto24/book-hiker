import React from "react";
import { Link } from "react-router-dom"

const ExploreConnects = () => {
  return (
    <div className="explore-connects">
      <h1 className="explore-connects-header">Connect with others</h1>
      <button className="arrow-btn">
        <Link style={{textDecoration:'none'}}to="/explore/all-users">→</Link>
      </button>
    </div>
  )
}

export default ExploreConnects;