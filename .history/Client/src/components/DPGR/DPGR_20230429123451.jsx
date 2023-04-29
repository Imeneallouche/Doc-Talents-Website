import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from "react-select";
import "./DPGR.css";


const DPGR = () => {
    const [dpgr, setdpgr] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [Sex, setSex] = useState([]);
    useEffect(() => {
        axios.get('/DPGR')
        .then(response => setdpgr(response.data))
        .catch(error => console.log(error));
    }, []);
    const handleEditClick = dpgr => {
        setEditingUser(dpgr);
        };

    const handleSaveClick = updatedUser => {
            axios.put(/users/${updatedUser.id}, updatedUser)
            .then(response => {
    const updatedUsers = users.map(user => user.id === updatedUser.id ? response.data : user);
            setUsers(updatedUsers);
            setEditingUser(null);
            })
            .catch(error => console.log(error));
            };
            
    const handleCancelClick = () => {
            setEditingUser(null);
            };

    const genderOptions = [
      { value: "M", label: "Male" },
      { value: "F", label: "Female" },
    ];
    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          backgroundColor: "white",
          borderColor: "#19202E",
          color: "#1E2959",
          placeholderColor: "#35468E",
          fontSize: "1rem",
          borderRadius: "0.375rem",
          padding: "0.5rem",
    
          "&:focus": {
            outline: "none",
            boxShadow: "none",
            borderColor: "#51BCA2",
            placeholderColor: "#51BCA2",
          },
        }),
        placeholder: (provided, state) => ({
          ...provided,
          color: "#35468E",
        }),
      };

  return (
    <div>
      <h1>User Profile</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                {editingUser === user ? (
                  <>
                    <button onClick={() => handleSaveClick(editingUser)}>Save</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleEditClick(user)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingUser && (
        <div>
          <h2>Edit User</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={editingUser.name} onChange={e => setEditingUser({ ...editingUser, name: e.target.value })} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={editingUser.email} onChange={e => setEditingUser({ ...editingUser, email: e.target.value })} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={editingUser.password} onChange={e => setEditingUser({ ...editingUser, password: e.target.value })} />
          </form>
        </div>
      )}
    </div>
  );
}

export default UserProfile;

  /*return (
    <div>
 <div className="Title">Profile DPGR</div>
 <div>
    <form className="m-10 grow flex flex-col justify-center items-center form-cont">
       <div className="m-4 flex flex-col flex-1">
       <label htmlFor="Nom"
       className={`font-bold text-dark-purple focus:text-green`}>
         Nom :
        </label>
        <input className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="Nom"
            name="Nom"
            placeholder="ex : DERBAL" />
            <label htmlFor="Role"
       className={`font-bold text-dark-purple focus:text-green`}>
         Role :
        </label>
        <input className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="Role"
            name="Role"
            placeholder="ex : ADMIN" />
        
            <label htmlFor="telephone"
       className={`font-bold text-dark-purple focus:text-green`}>
         Numero de telephone :
        </label>
        <input className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="teL"
            id="telephone"
            name="telephone"
            placeholder="ex : 0798502217" />
             <label htmlFor="password"
       className={`font-bold text-dark-purple focus:text-green`}>
         Password :
        </label>
        <input className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="password"
            id="password"
            name="password"
            placeholder="ex : ******** " />
       </div>
       <div className="m-4 flex flex-col flex-1">
       <label htmlFor="Prenom"
       className={`font-bold text-dark-purple focus:text-green`}>
         Prenom :
        </label>
        <input className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="Prenom"
            name="Prenom"
            placeholder="ex : RAYHANE" />
            <label htmlFor="Sexe" className={`font-bold text-dark-purple`}>
            Sexe :
          </label>
          <Select
            placeholder="Male"
            className="selected"
            id="Sexe"
            styles={customStyles}
            options={genderOptions}
            value={Sex}
            onChange={(event) => setSex(event)}
            isClearable
            required
            />
            <label htmlFor="Email"
       className={`font-bold text-dark-purple focus:text-green`}>
         Email :
        </label>
        <input className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="email"
            id="Email"
            name="Email"
            placeholder="ex : DPGR@esi.dz" />
             <label htmlFor="confirmepassword"
       className={`font-bold text-dark-purple focus:text-green`}>
         Password confirmation :
        </label>
        <input className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="password"
            id="confirmepassword"
            name="confirmepassword"
            placeholder="ex : ********" />
       
       </div>
    </form>
    <div>
        <button className="submit-form suivant m-5 px-8 py-4 w-fit rounded-md text-white buttonn"
          type="submit">Mettre a jour</button>
    </div>
   </div>
    </div>
   
    
  )
  */
}

export default DPGR