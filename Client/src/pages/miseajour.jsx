import React, { useState } from 'react';
import axios from 'axios';

export default function miseAjour() {
  const [soutenu, setSoutenu] = useState(''); // State to hold soutenu value

  const handleClick = () => {
    axios.put('/updateSoutenu', {
      soutenu: 2101, // Set soutenu to 'yes'
      id: "21/0021" // Set the id of the doctorant you want to update
    })
      .then(response => {
        console.log(response.data);
        setSoutenu(response.data.soutenu); // Update the state with the new soutenu value
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={handleClick}>Update Soutenu</button>
      <p>Soutenu: {soutenu}</p>
    </div>
  );
}

