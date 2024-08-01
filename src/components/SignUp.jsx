import React, {useState} from "react";

const UserCreator = () => {
  const [firstNameInput, setFirstName] = useState('');
  const [lastNameInput, setLastName] = useState('');
  const [userNameInput, setUserName] = useState('');

  const firstNameUpdate = (event) => {
    setFirstName(event.target.value);
  }

  const lastNameUpdate = (event) => {
    setLastName(event.target.value);
  }

  const userNameUpdate = (event) => {
    setUserName(event.target.value);
  }



  return (
    <form className="signup-form">
      <label><strong>First Name: </strong>
        <input required type="text" value={firstNameInput} onChange={firstNameUpdate} className="first-name-input"/>
      </label>
      <label><strong>Last Name: </strong>
        <input required type="text" value={lastNameInput} onChange={lastNameUpdate} className="last-name-input"/>
      </label>
      <label><strong>Username: </strong>
        <input required type="text" value={userNameInput} onChange={userNameUpdate} className="user-name-input"/>
      </label>
    </form>
  )
}

export default UserCreator;