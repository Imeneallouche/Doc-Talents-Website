import React, { useState } from "react";
import Select from "react-select";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Inscription02() {
  const [DirecteurThese, setDirecteurThese] = useState("");
  const [CoDirecteurThese, setCoDirecteurThese] = useState("");
  const [Laboratoire, setLaboratoire] = useState("");

  const [Option, setOption] = useState("");
  const [TypeDoctorant, setTypeDoctorant] = useState("");
  const [IntituleSujet, setIntituleSujet] = useState("");

  const [EtablissementMaster, setEtablissementMaster] = useState("");
  const [EtablissementIngeniorat, setEtablissementIngeniorat] = useState("");
  const [EtablissementMagestere, setEtablissementMagestere] = useState("");

  const [PremiereInscription, setPremiereInscription] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const TypeDoctorantoptions = [
    { value: "LMD", label: "LMD" },
    { value: "Classique", label: "Classique" },
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
      className="m-10 w-full h-full flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <section className="flex w-full">
        <div className="m-4 flex flex-col flex-1">
          <label
            htmlFor="DirecteurThese"
            className={`font-bold text-dark-purple focus:text-green`}
          >
            Directeur de thèse
          </label>
          <input
            className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="DirecteurThese"
            name="DirecteurThese"
            value={DirecteurThese}
            placeholder="ex : Si Tayeb Fatima"
            onChange={(event) => setDirecteurThese(event.target.value)}
            required
          />
        </div>
        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label
            htmlFor="CoDirecteurThese"
            className={`font-bold text-dark-purple`}
          >
            Co directeur de thèse
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="text"
            id="CoDirecteurThese"
            name="CoDirecteurThese"
            placeholder="ex : Khellouat Boualem"
            value={CoDirecteurThese}
            onChange={(event) => setCoDirecteurThese(event.target.value)}
            required
          />
        </div>

        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label htmlFor="Laboratoire" className={`font-bold text-dark-purple`}>
            Laboratoire
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="text"
            id="Laboratoire"
            name="Laboratoire"
            value={Laboratoire}
            placeholder="ex : FabLab"
            onChange={(event) => setLaboratoire(event.target.value)}
            required
          />
        </div>
      </section>

      <section className="flex w-full">
        <div className="m-4 flex flex-col flex-1">
          <label
            htmlFor="Option"
            className={`font-bold text-dark-purple focus:text-green`}
          >
            Option
          </label>
          <input
            className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="Option"
            name="Option"
            value={Option}
            placeholder="ex : SIQ"
            onChange={(event) => setOption(event.target.value)}
            required
          />
        </div>

        <div className="m-4 flex flex-col flex-1">
          <label
            htmlFor="TypeDoctorant"
            className={`font-bold text-dark-purple`}
          >
            Type Doctorant
          </label>
          <Select
            placeholder="LMD"
            styles={customStyles}
            id="TypeDoctorant"
            options={TypeDoctorantoptions}
            value={TypeDoctorant}
            onChange={(event) => setTypeDoctorant(event)}
            isClearable
          />
        </div>

        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label
            htmlFor="IntituleSujet"
            className={`font-bold text-dark-purple`}
          >
            Intitulé sujet
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="text"
            id="IntituleSujet"
            name="IntituleSujet"
            value={IntituleSujet}
            placeholder="ex : Binary exploitation"
            onChange={(event) => setIntituleSujet(event.target.value)}
            required
          />
        </div>
      </section>

      <section className="flex w-full">
        <div className="m-4 flex flex-col flex-1">
          <label
            htmlFor="EtablissementMaster"
            className={`font-bold text-dark-purple focus:text-green`}
          >
            Etablissement d'origine Master
          </label>
          <input
            className={`bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0`}
            type="text"
            id="EtablissementMaster"
            name="EtablissementMaster"
            value={EtablissementMaster}
            placeholder="ex : USTHB"
            onChange={(event) => setEtablissementMaster(event.target.value)}
          />
        </div>
        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label
            htmlFor="EtablissementMagestere"
            className={`font-bold text-dark-purple`}
          >
            Etablissement d'origine Magestere
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="text"
            id="EtablissementMagestere"
            name="EtablissementMagestere"
            placeholder="ex : ESI Alger"
            value={EtablissementMagestere}
            onChange={(event) => setEtablissementMagestere(event.target.value)}
          />
        </div>

        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label
            htmlFor="EtablissementIngeniorat"
            className={`font-bold text-dark-purple`}
          >
            Etablissement d'origine Ingéniorat
          </label>
          <input
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
            type="text"
            id="EtablissementIngeniorat"
            name="EtablissementIngeniorat"
            value={EtablissementIngeniorat}
            placeholder="ex : ESI Alger"
            onChange={(event) => setEtablissementIngeniorat(event.target.value)}
          />
        </div>
      </section>

      <section className={`flex m-2 w-full items-center`}>
        <div className="m-4 flex flex-col flex-1">
          <label
            htmlFor="PremiereInscription"
            className={`font-bold text-dark-purple m-2`}
          >
            Date de première inscription
          </label>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            id="PremiereInscription"
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
          >
            <DatePicker
              label="select date"
              className="bg-white border"
              value={PremiereInscription}
              onChange={(event) => setPremiereInscription(event)}
              renderInput={(params) => <TextField {...params} required />}
            />
          </LocalizationProvider>
        </div>
      </section>
      <section>
        <button
          type="submit"
          className="m-5 px-8 py-4 w-fit bg-dark-purple rounded-md text-white"
        >
          Précédant
        </button>

        <button
          type="submit"
          className="m-5 px-8 py-4 w-fit bg-dark-purple rounded-md text-white"
        >
          Suivant
        </button>
      </section>
    </form>
  );
}

export default Inscription02;
