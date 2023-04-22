import React, { useState } from "react";
import Select from "react-select";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Inscription01() {
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Id_Doctorant, setIdDoctorant] = useState("");

  const [Id_PV, setIdPV] = useState("");
  const [Numero_tel, setNumeroTel] = useState("");
  const [Email, setEmail] = useState("");

  const [Birthday, setBirthday] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  const [Sex, setSex] = useState([]);

  const genderOptions = [
    { value: "M", label: "Male" },
    { value: "F", label: "Female" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(`Email: ${email}, Password: ${password}`);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "white",
      borderColor: "#19202E",
      color: "#1E2959",
      placeholderColor: "#35468E",
      fontSize: "1rem",
      borderRadius: "0.375rem",
      padding: "0.75rem",

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
  /*


















  */

  return (
    <form
      className="m-10 grow flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <section className="flex w-full">
        <div className="m-4 flex flex-col flex-1">
          <label
            htmlFor="Nom"
            className={`font-bold text-dark-purple focus:text-green`}
          >
            Nom
          </label>
          <input
            className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="Nom"
            name="Nom"
            value={Nom}
            placeholder="ex : ALLOUCHE"
            onChange={(event) => setNom(event.target.value)}
            required
          />
        </div>
        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label htmlFor="Prenom" className={`font-bold text-dark-purple`}>
            Prénom
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="text"
            id="Prenom"
            name="Prenom"
            placeholder="ex : Imène"
            value={Prenom}
            onChange={(event) => setPrenom(event.target.value)}
            required
          />
        </div>

        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label
            htmlFor="Id_Doctorant"
            className={`font-bold text-dark-purple`}
          >
            ID du doctorant
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="text"
            id="Id_Doctorant"
            name="Id_Doctorant"
            value={Id_Doctorant}
            placeholder="ex : 21/0022"
            onChange={(event) => setIdDoctorant(event.target.value)}
            required
          />
        </div>
      </section>

      <section className={`flex m-10 w-full items-center`}>
        <div className="m-4 flex flex-col flex-1">
          <label
            htmlFor="Birthday"
            className={`font-bold text-dark-purple m-2`}
          >
            Date de naissance
          </label>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            id="Birthday"
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
          >
            <DatePicker
              label="select date"
              className="bg-white border"
              value={Birthday}
              onChange={(event) => setBirthday(event)}
              renderInput={(params) => <TextField {...params} required />}
            />
          </LocalizationProvider>
        </div>

        <div className="m-4 flex flex-col flex-1">
          <label htmlFor="Sexe" className={`font-bold text-dark-purple`}>
            Sexe
          </label>
          <Select
            placeholder="Male"
            styles={customStyles}
            id="Sexe"
            options={genderOptions}
            value={Sex}
            onChange={(event) => setSex(event)}
            isClearable
          />
        </div>
      </section>

      <section className="flex w-full">
        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label htmlFor="Id_PV" className={`font-bold text-dark-purple`}>
            ID du PV
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="text"
            id="Id_PV"
            name="Id_PV"
            placeholder="ex : 23/0001"
            value={Id_PV}
            onChange={(event) => setIdPV(event.target.value)}
            required
          />
        </div>

        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label
            htmlFor="Numero_telephone"
            className={`font-bold text-dark-purple`}
          >
            Numero du telephone
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="tel"
            id="Numero_telephone"
            name="Numero_telephone"
            placeholder="ex : 0699240858"
            value={Numero_tel}
            onChange={(event) => setNumeroTel(event.target.value)}
            required
          />
        </div>

        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label htmlFor="Email" className={`font-bold text-dark-purple`}>
            Email du doctorant
          </label>
          <input
            className="bg-white border peer border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="email"
            id="Email"
            name="Email"
            placeholder="ex : doctalents@gmail.com"
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <p className="mt-2 invisible peer-invalid:visible text-orange text-sm">
            Please provide a valid email address.
          </p>
        </div>
      </section>
    </form>
  );
}

export default Inscription01;
