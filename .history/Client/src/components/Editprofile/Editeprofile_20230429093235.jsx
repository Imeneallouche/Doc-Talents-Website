import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import axios from 'axios';
import "./Editprofile.css";
import { Link,  useParams } from 'react-router-dom';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import img from "../../assets/Avatars/H1.png";

function Edituser({ DoctorantId }) {
  const [image, setimage]=useState(null);
  const [imagecrop, setimagecrop]=useState("");
  const [src, setsrc] = useState(false);
  const [profile, setprofile] = useState([]);
  const [pview, setpview] = useState(false);
  const profilefinal = profile.map((item)=> item.pview);
  const onClose =()=>{
    setpview(null);
  };
  const onCrop = (view)=>{
    setpview(view);
  };
  const saveCropImage=()=>{
    setprofile([...profile,{pview}]);
    setimagecrop(false);
  };

  const [date, setDate] = useState("");
  const [datee, setDatee] = useState("");
  const [dateee, setDateee] = useState("");

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  const [Doctorant, setDoctorant] = useState({});
  const [formData, setFormData] = useState({});


  useEffect(() => {
    axios.get(`/Doctorant/${DoctorantId}`)
      .then(response => setUser(response.data))
      .catch(error => console.log(error));
  }, [DoctorantId]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`/Doctorant/${DoctorantId}`, formData)
      .then(response => {
        console.log('User updated successfully');
        // optionally redirect to a success page or refresh the user data
      })
      .catch(error => console.log(error));
  };
  return (
    <div className={`bg-white-bluish w-full h-full overflow-y-scroll flex flex-col flex-1`}>
      <form className="form-container" onSubmit={handleSubmit}>
        <div  className="form-column">
          <Dialog
          visible={imagecrop}
          header={()=>(
            <p htmlFor="" className="text-2xl front-demibold text color">
              updateprofile
            </p>
          )}
          OnHide={()=> setimagecrop(false)}
          >
            <div className="confirmation-content flex flex-column align-items-center">
              <Avatar
              width={500}
              height={400}
              onCrop={onCrop}
              onClose={onClose}
              src={src}
              shadingColor={"#474649"}
              backgroundColor={"#474649"}
              />
              <div className="flex flex-column align-items-center mt-5 w-12">
                <div className="flex justify-content-around w-12 mt-4">
                    <Button
                    onClick={saveCropImage}
                    label="save"
                    icon="pi pi-check"
                    />
                </div>

              </div>
            </div>
          </Dialog>
           <InputText 
           type='file'
           accept='/image/*'
           style={{display: "none"}}

           onChange={(event)=>{
            const file = event.target.files[0];
            if (file && file.type.substring(0,5)==="image"){
                 setimage(file);
            }else{
              setimage(null);
            }
           }}
           />
          <img 
           onClick={()=> setimagecrop(true)}
           src={profilefinal.length ? profilefinal : img}
           alt="" className="zoom-out"/>
          
        <label htmlFor="Nom">Nom:</label>
        <input type="text" placeholder="Derbal" name="nom" defaultValue={Doctorant.nom} onChange={handleInputChange} />
        <label htmlFor="Prénom">Prénom:</label>
        <input type="text" placeholder="Rayhane" name="prenom" defaultValue={Doctorant.prenom} onChange={handleInputChange}/>
        <label htmlFor="Matricule">Matricule:</label>
        <input type="text" placeholder="20/0046" name="Matricule" defaultValue={Doctorant.matricule} onChange={handleInputChange}/>
          <button className="button" type="submit">Enregistrer</button>
         
        
        </div>
      <div className="form-column">
        <label htmlFor="Date de naissance">Date de naissance:</label>
        <input placeholder="13/03/2003" name="Date_naissance" defaultValue={Doctorant.Date_naissance} type="date" id="date-input" value={date} onChange={handleDateChange}/>
        <label htmlFor="sexe">Sexe:</label>
        <input type="text" placeholder="Femme" name="sexe" defaultValue={Doctorant.sexe} onChange={handleInputChange} />
        <label htmlFor="Option">Option:</label>
        <input type="text" placeholder="SIL" name="Specialite" defaultValue={Doctorant.Specialite} onChange={handleInputChange}/>
        <label htmlFor="Numero de telephone">Numero de telephone:</label>
        <input type="tel" placeholder="0568134937" name="telephone" defaultValue={Doctorant.telephone} onChange={handleInputChange}/>
        <label htmlFor="Situation">Situation:</label>
        <input type="text" placeholder="Soutenu" name="statut" defaultValue={Doctorant.statut} onChange={handleInputChange}/>
        <label htmlFor="Laboratoire">Laboratoire:</label>
        <input type="text" placeholder="idk"name="laboratoire" defaultValue={Doctorant.laboratoire} onChange={handleInputChange}/>
        <label htmlFor="Date de soutenance">Date de soutenance:</label>
        <input type="date" id="date-inputtt" value={datee} onChange={handleDateChange} placeholder="16/09/2026" name="date_soutenance" defaultValue={Doctorant.date_soutenance} />
      </div>
      <div className="form-column">
        <label htmlFor="etablissement">Etablissement:</label>
        <input type="text" placeholder="mn3ref" name="Etablissement_origine_Master" defaultValue={Doctorant.Etablissement_origine_Master} onChange={handleInputChange} />
        <label htmlFor="Date de premiere inscription">Date de premiere inscription:</label>
        <input type="date" id="date-inputt" value={dateee} onChange={handleDateChange} placeholder="13/03/2026" name="Premiere_inscriptionm" defaultValue={Doctorant.Premiere_inscription} />
        <label htmlFor="Nombre d'inscriptions">Nombre d'inscriptions:</label>
        <input type="text" placeholder="1" name="Nombre_inscriptions" defaultValue={Doctorant.Nombre_inscriptions} onChange={handleInputChange}/>
        <label htmlFor="Encadreur">Encadreur:</label>
        <input type="text" placeholder="mn3ref" name="Id_Encadreur" defaultValue={Doctorant.Id_Encadreur} onChange={handleInputChange}/>
        <label htmlFor="Co-encadreur">Co-encadreur:</label>
        <input type="text" placeholder="mn3ref" name="Id_CoEncadreur" defaultValue={Doctorant.Id_CoEncadreur} onChange={handleInputChange}/>
        <label htmlFor="Intitulé de thèse">Intitulé de thèse:</label>
        <input type="text" placeholder="mn3ref" name="intitule_sujet" defaultValue={Doctorant.intitule_sujet} onChange={handleInputChange}/>
        <label htmlFor="Intitulé sujet bis">Intitulé sujet bis:</label>
        <input type="text" placeholder="mn3ref" name="intitule_sujet_bis" defaultValue={Doctorant.intitule_sujet_bis} onChange={handleInputChange}/>
      </div>
    </form>
    </div>
 );
}

export default Edituser;