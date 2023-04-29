import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile(props) {
  const [Doctorant, setDoctorant] = useState({});

  useEffect(() => {
    axios.get(`/Doctorant/${props.DoctorantId}`)
      .then(res => setDoctorant(res.data))
      .catch(err => console.log(err));
  }, [props.DoctorantId]);

  return (
    <div>
      <h1>{Doctorant.name}</h1>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
    </div>
  );
}

export default UserProfile;
