import React from "react";

const User = ({ id, firstName, lastName, userName }) => {
  return (
    <div className="user-info-container">
      <h1 className="username">{userName}</h1>
      <p className="user-first-name">First Name: {firstName}</p>
      <p className="user-last-name">Last Name: {lastName}</p>
      <button className="connect-btn">Connect</button>
    </div>
  )
}

export default User;