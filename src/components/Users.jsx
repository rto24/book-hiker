import React from "react";

const User = ({ id, firstName, lastName, userName }) => {
  return (
    <div className="user-info-container">
      <h1>{userName}</h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <button className="connect-btn">Connect</button>
    </div>
  )
}

export default User;