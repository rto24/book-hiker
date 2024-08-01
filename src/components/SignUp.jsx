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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstNameInput,
          lastName: lastNameInput,
          username: userNameInput
        })
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Successful POST', data);
      } else {
        console.log('Error', response.statusText);
      }
      setFirstName('');
      setLastName('');
      setUserName('');
    } catch (error) {
      console.error('Error', error);
    }
  }

  return (
    <>
    <h1 className="signup-header">Sign up to get started</h1>
    <form className="signup-form" onSubmit={handleSubmit}>
      <label><strong>First Name: </strong>
        <input required type="text" value={firstNameInput} onChange={firstNameUpdate} className="first-name-input"/>
      </label>
      <label><strong>Last Name: </strong>
        <input required type="text" value={lastNameInput} onChange={lastNameUpdate} className="last-name-input"/>
      </label>
      <label><strong>Username: </strong>
        <input required type="text" value={userNameInput} onChange={userNameUpdate} className="user-name-input"/>
      </label>
      <button type="submit" className="signup-btn">Sign Up</button>
    </form>
    </>
  )
}

export default UserCreator;