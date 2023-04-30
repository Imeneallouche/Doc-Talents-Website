import React, { useState } from 'react';
import axios from 'axios';

function UserInformation() {
  const [name, setName] = useState('');
  const [userInformation, setUserInformation] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a GET request to the Node.js backend to retrieve user information by name
      const response = await axios.get(`/user-information?name=${name}`);

      // Update the state with the user information
      setUserInformation(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>

      {userInformation && (
        <div>
          <h2>User Information</h2>
          <ul>
            <li>Name: {userInformation.name}</li>
            <li>Email: {userInformation.email}</li>
            <li>Phone: {userInformation.phone}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserInformation;
