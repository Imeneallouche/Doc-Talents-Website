import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function DPGR() {
    
   

  const RUNNING_URL = "http://localhost:5000";
  const ENDPOINT = "/PDPGR";

  const [user, setUser] = useState(null);
  const useremail = localStorage.getItem('Email');
  const [Editable, setEditable] = useState(false);
  const [nom, setnom] = useState('');
  const [prenom, setprenom] = useState('');
  const [telephone, settelephone] = useState('');
  const [email, setemail] = useState('');
  const [sexe, setsexe] = useState('');
  const [role, setrole] = useState('');
  const [password, setpass] = useState('');
  



  useEffect(() => {
    fetch(`/PDPGR/${useremail}`)
    .then(response => response.json())
    .then(userData => {
      setUser(userData);
    })
    .catch(error => {
      console.error(error);
    });
}, [useremail]);  

const handleEdit = () => {
  setEditable(true);
};

const handlenomChange = (event) => {
  setnom(event.target.value);
};
const handleprenomChange = (event) => {
  setprenom(event.target.value);
};
const handletelChange = (event) => {
  settelephone(event.target.value);
};
const handlesexChange = (event) => {
  setsexe(event.target.value);
};
const handlerolChange = (event) => {
  setrole(event.target.value);
};
const handleemailChange = (event) => {
  setemail(event.target.value);
};
const handlepassChange = (event) => {
  setpass(event.target.value);
};


const handleSaveChanges = (event) => {
  event.preventDefault();
  setEditable(false);

  axios.post(`http://localhost:5000/EditDPGR/${useremail}`, {
    nom : nom,
    prenom : prenom,
    telephone : telephone,
    role : role,
    sexe : sexe,
    email : email,
    password : password,
    
  })
    .then((response) => {
      console.log(response.data);
      alert('Les modifications ont été enregistrées avec succès!');
    })
    .catch((error) => {
      console.error(error);
      alert('Erreur lors de l\'enregistrement des modifications.');
    });
};


  


  



      if (!user) {
        return <div>Loading...</div>;
      }
    
      return (
        <div className="mb-20">
     <div className="bg-gradient-to-l from-blue-900 to-indigo-700 w-50 mr-20 h-20 rounded-3xl flex justify-start items-center text-white text-lg ml-20 font-bold poppins shadow-md pl-10">
        Profile DPGR</div>
     <div>
        <form onSubmit={handleSaveChanges} className="m-10 mt-0 mb-0 grow flex flex-col justify-center items-center grid grid-cols-2 gap-50 p-55 ">
           <div className="m-4 mb-0 flex flex-col flex-1">
           <label htmlFor="Nom"
           className={`font-bold text-dark-purple focus:text-green mb-3`}>
             Nom : 
            </label>
            {Editable ?
             <input
             className={`bg-white mb-4 border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
             type="text"
             id="nom"
             name="nom"
             placeholder='ex : Derbal'
             value={nom}
             onChange={handlenomChange}
           />
           :
            <input className={`bg-white border border-dark-purple mb-5 text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
                type="text"
                id="Nom"
                name="Nom"
                placeholder={user.nom} 
                disabled
                
            />
          }
                <label htmlFor="Role"
           className={`font-bold text-dark-purple focus:text-green mb-3`}>
             Role : 
            </label>
            {Editable ?
             <input
             className={`bg-white mb-4 border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
             type="text"
             id="role"
             name="role"
             placeholder='ex : ADMIN'
             value={role}
          onChange={handlerolChange}
         
           />
           :
            <input className={`bg-white border mb-5 border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
                type="text"
                id="Role"
                name="Role"
                placeholder={user.Role}
                disabled />
}
                <label htmlFor="telephone"
           className={`font-bold text-dark-purple focus:text-green mb-3`}>
             Numero de telephone :
            </label>
            {Editable ?
             <input
             className={`bg-white mb-4 border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
             type="text"
             id="telephone"
             name="telephone"
             placeholder='ex : 0676180978'
             value={telephone}
          onChange={handletelChange}
         
           />
           :
            <input className={`bg-white border mb-5 border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
                type="teL"
                id="telephone"
                name="telephone"
                placeholder={user.telephone}
                disabled
                />
            }
           </div>
           <div className="m-4 mb-0 flex flex-col flex-1">
           <label htmlFor="Prenom"
           className={`font-bold text-dark-purple focus:text-green mb-3`}>
             Prenom : 
            </label>
            {Editable ?
             <input
             className={`bg-white mb-4 border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
             type="text"
             id="prenom"
             name="prenom"
             placeholder='ex : Rayhane'
             value={prenom}
          onChange={handleprenomChange}
          required
           />
           :
            <input className={`bg-white mb-4 border border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
                type="text"
                id="Prenom"
                name="Prenom"
                placeholder={user.prenom}
                disabled/>
            }
                <label htmlFor="Sexe" className={`font-bold text-dark-purple mb-3`}>
                Sexe :
              </label>
              {Editable ?
             <input
             className={`bg-white mb-4 border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
             type="text"
             id="sexe"
             name="sexe"
             placeholder='ex : H'
             value={sexe}
          onChange={handlesexChange}
          
           />
           :
              <input className={`bg-white mb-4 border border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
                type="text"
                id="sexe"
                name="sexe"
                placeholder={user.sexe}
                disabled/>
              }
                <label htmlFor="Email"
           className={`font-bold text-dark-purple focus:text-green mb-3`}>
             Email :  
            </label>
            {Editable ?
             <input
             className={`bg-white mb-4 border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
             type="text"
             id="Email"
             name="Email"
             placeholder='ex : lr_derbal@esi.dz'
             value={email}
          onChange={handleemailChange}
         
           />
           :
            <input className={`bg-white border mb-5 border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
                type="email"
                id="Email"
                name="Email"
                placeholder={user.email}
                disabled />
            }
           
           </div>
        </form>
        <div className=" ml-12 mr-12 flex flex-col flex-1">
        <label htmlFor="password"
           className={`font-bold text-dark-purple focus:text-green mt-0 mb-3`}>
             Password :  
            </label>
            {Editable ?
             <input
             className={`bg-white mb-4 border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
             type="password"
                id="password"
                name="password"
                placeholder="ex : imene2004"
             value={password}
          onChange={handlepassChange}
         
           />
           :
            <input className={`bg-white border mb-4 border-dark-purple text-purple placeholder-black text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
                type="password"
                id="password"
                name="password"
                placeholder={user.password}
                disabled />
            }
          </div>
          <div>
        {Editable ?
            <button className="bg-green text-white py-4 px-6 rounded float-right mr-20 mt-0 mb-0"
            onClick={handleSaveChanges}
              type="button">
                
              Enregister
              </button>
          :
          <button
            className="bg-green text-white py-4 px-6 rounded float-right mr-20 mt-0 mb-0 "
            onClick={handleEdit}
            type="button"
          >
            Mettre à Jour
          </button>
        }
        </div>
       </div>
        </div>
      );
     /*
     
        */
       
}

export default DPGR;
    