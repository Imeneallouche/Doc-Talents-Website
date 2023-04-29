import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`/users/${props.userId}`)
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, [props.userId]);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
    </div>
  );
}

export default UserProfile;
