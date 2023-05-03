import { useState, useContext } from "react";
import Select from "react-select";
import dayjs from "dayjs";

import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormDataContext } from "../Store";
import axios from "axios";

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

  const [PremiereInscription, setPremiereInscription] = useState(null);

  const [DateFichierCentral, setDateFichierCentral] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const currentYear = new Date().getFullYear();
  const FirstYearEver = 2012;

  const RUNNING_URL = "http://localhost:5000";
  const ENDPOINT = "/RegisterDoctorant";

  const history = useHistory();
  //const { formData } = useContext(FormDataContext);

  const years = [];
  for (let year = FirstYearEver; year <= currentYear; year++) {
    years.push(year);
  }

  const yearsOption = [];
  for (let i = FirstYearEver; i <= currentYear; i++) {
    let obj = { value: i, label: i };
    yearsOption.push(obj);
  }

  const TypeDoctorantoptions = [
    { value: "LMD", label: "LMD" },
    { value: "Classique", label: "Classique" },
  ];

  const handlePrevious = (event) => {
    event.preventDefault();
    history.goBack();
  };

  const { formData: formData1 } = useContext(FormDataContext);

  /*










  */

  const handleNext = async (e) => {
    e.preventDefault();

    const data = {
      ...formData1,
      DirecteurThese,
      CoDirecteurThese,
      Laboratoire,
      Option,
      TypeDoctorant: TypeDoctorant.value,
      IntituleSujet,
      EtablissementMagestere,
      EtablissementIngeniorat,
      EtablissementMaster,
      PremiereInscription: PremiereInscription.value,
      DateFichierCentral: dayjs(DateFichierCentral).format("YYYY-MM-DD"),
    };

    const response = await axios.post(RUNNING_URL + ENDPOINT, data);
    const { state1, state2 } = response.data;

    /*




    */

    if (state1 == 0 && state2 == 0) {
      console.log("both are here");

      let { encadreur, coencadreur } = response.data;
      history.push({
        pathname: "/Inscription/ConfirmEncadrant",
        state: { encadreur, coencadreur },
      });

      /*



      */
    } else if (state1 == 0 && state2 == 1) {
      console.log("got to register co encadreur");

      let { encadreur } = response.data;
      let info = { type: 1, name: CoDirecteurThese };

      history.push({
        pathname: "/Inscription/Step3",
        state: { encadreur, info },
      });

      /*



      */
    } else if (state1 == 1 && state2 == 0) {
      console.log("got to register encadreur");

      let { coencadreur } = response.data;
      let info = { type: 0, name: DirecteurThese };

      history.push({
        pathname: "/Inscription/Step3",
        state: { coencadreur, info },
      });

      /*



      */
    } else {
      console.log("got to register both");
      let info = { type: 2, name1: DirecteurThese, name2: CoDirecteurThese };

      history.push({
        pathname: "/Inscription/Step3",
        state: { info },
      });
    }
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
      className="mx-10 grow flex flex-col justify-center items-center"
      onSubmit={handleNext}
    >
      <section className={`flex w-full items-center`}>
        <div className="m-4 flex flex-col flex-1">
          <label
            htmlFor="DateFichierCentral"
            className={`font-medium text-dark-purple m-2`}
          >
            Date du fichier central
          </label>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            id="DateFichierCentral"
            className="bg-white border border-dark-purple text-purple placeholder-light-purple text-sm rounded-lg p-5 focus:placeholder-green focus:border-green focus:outline-none focus:ring-0"
          >
            <DatePicker
              label="select date"
              className="bg-white border"
              value={DateFichierCentral}
              onChange={(event) => setDateFichierCentral(event)}
              format="YYYY-MM-DD"
              renderInput={(params) => <TextField {...params} required />}
            />
          </LocalizationProvider>
        </div>

        <div className="m-4 flex flex-col flex-1">
          <label
            htmlFor="PremiereInscription"
            className={`font-medium text-dark-purple m-2`}
          >
            Date de première inscription
          </label>
          <Select
            className="mt-1"
            placeholder={FirstYearEver}
            id="PremiereInscription"
            value={PremiereInscription}
            onChange={(event) => setPremiereInscription(event)}
            isClearable
            styles={customStyles}
            options={yearsOption}
          ></Select>
        </div>
      </section>

      <section className="flex w-full">
        <div className="m-4 flex flex-col flex-1">
          <label
            htmlFor="DirecteurThese"
            className={`font-medium text-dark-purple focus:text-green`}
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
            className={`font-medium text-dark-purple`}
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
          />
        </div>

        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label
            htmlFor="Laboratoire"
            className={`font-medium text-dark-purple`}
          >
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
          />
        </div>
      </section>

      <section className="flex w-full">
        <div className="m-4 flex flex-col flex-1">
          <label
            htmlFor="Option"
            className={`font-medium text-dark-purple focus:text-green`}
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
            className={`font-medium text-dark-purple`}
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
            required
          />
        </div>

        <div className="m-4 flex flex-col flex-1">
          {" "}
          <label
            htmlFor="IntituleSujet"
            className={`font-medium text-dark-purple`}
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
            className={`font-medium text-dark-purple focus:text-green`}
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
            className={`font-medium text-dark-purple`}
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
            className={`font-medium text-dark-purple`}
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

      <div>
        <button
          className="submit-form suivant m-5 px-8 py-4 w-fit bg-dark-purple rounded-md text-white"
          type="button"
          onClick={handlePrevious}
        >
          Précédant
        </button>

        <button
          className="submit-form suivant m-5 px-8 py-4 w-fit bg-dark-purple rounded-md text-white"
          type="submit"
        >
          Suivant
        </button>
      </div>
    </form>
  );
}

export default Inscription02;
