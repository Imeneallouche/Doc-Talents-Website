import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile(props) {
  const [Doc, setDoctorant] = useState({});

  useEffect(() => {
    axios.get(`/Doctorant/${props.DoctorantId}`)
      .then(res => setDoctorant(res.data))
      .catch(err => console.log(err));
  }, [props.DoctorantId]);

  return (
    <div>
      <h1>{Doc.nom}</h1>
      <p>Email: {Doc.prenom}</p>
      <p>Address: {Doctorant.sexe}</p>
    </div>
  );
}

export default UserProfile;
