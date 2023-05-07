import React, { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";

function ImportFile() {
  const RUNNING_URL = "http://localhost:5000";
  const ENDPOINT = "/ImportFile";

  const [NecessaryHeadersMissing, setNecessaryHeadersMissing] = useState(false);
  const [file, setFile] = useState(null);
  const [requiredHeaders, setRequiredHeaders] = useState([
    "Nom",
    "Prénom",
    "Sexe",
    "Option",
    "Première Inscription",
    "Intitulé Du Sujet",
    //"Date enregistrement Fichier Central des Thèses",
    "Labo",
    "Directeur de thèse",
    //"Etablissement directeur de thèse",
    "Co-directeur de thèse",
    "Etablissement co-directeur de thèse",
    //"PV CS inscription en 1ière année",
    //"PV CS réinscription",
    "Situation",
    "Soutenance ou Abandon",
  ]);
  const [data, setData] = useState({});

  const onFileChange = (event) => {
    // Read the Excel file and extract data
    const file = event.target.files[event.target.files.length - 1];

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      const rows = sheetData.filter((row) => {
        return !row.every((cell) => !cell);
      });

      // Check if the required headers exist
      const headers = sheetData[0].map((header) => header.trim().toLowerCase());
      const requiredHeadersLowerCase = requiredHeaders.map((header) =>
        header.trim().toLowerCase()
      );
      const missingHeaders = requiredHeadersLowerCase.filter(
        (header) => !headers.includes(header)
      );
      if (missingHeaders.length > 0) {
        setNecessaryHeadersMissing(true);
        console.log(`Missing headers: ${missingHeaders}`);
      }

      // Extract data for the required headers
      /*
      const dataObj = {};
      headers.forEach((header) => {
        const columnIndex = requiredHeaders.indexOf(
          header.trim().toLowerCase()
        );
        const columnData = sheetData.slice(1).map((row) => row[columnIndex]);
        dataObj[header] = columnData;
      });
      setData(dataObj);
      console.log(`heraaaaa:`, dataObj);
*/
      axios
        .post(RUNNING_URL + ENDPOINT, rows.slice(1))
        .then((response) => {
          console.log("Data sent successfully");
        })
        .catch((error) => {
          console.error("Error sending data", error);
        });
    };
    reader.readAsArrayBuffer(file);

    // Send data to backend
    /*
      
    };
    reader.readAsArrayBuffer(file);
    setFile(file);
    */
  };

  return (
    <div className="flex">
      <div className="border rounded-sm border-slate-400 bg-white w-fit h-fit p-5 flex flex-col items-center m-2">
        <img
          src={require("../../assets/DataTransfer.png")}
          alt="Import_file"
          className="w-52 m-10"
        />
        <h1 className="text-purple font-bold m-5">
          Importer votre fichier excel
        </h1>

        <div className="flex flex-col items-center m-5">
          <p className="text-purple">Afin que tous les anciens doctorants</p>
          <p className="text-purple">mentionnés dans le fichier excel</p>
          <p className="text-purple">soient automatiquement</p>
          <p className="text-purple">inscrits</p>
        </div>
        <input
          type="file"
          accept=".xlsx, .xls"
          className="bg-dark-purple m-10 px-10 py-5 hidden"
          onChange={onFileChange}
          id="import"
        />
        <label
          htmlFor="import"
          className="bg-dark-purple m-10 px-10 py-5 hover:cursor-pointer"
        >
          {" "}
          Importer
        </label>
      </div>

      {/*
      
      
      
      
      
      
      
      
      
      
      
      
      */}

      <div className="border rounded-sm border-slate-400 bg-white w-fit flex-1 p-5 flex flex-col items-center m-2">
        <h1 className="text-purple font-bold m-5">
          Consignes afin que l'importation et traitement du fichier excel soient
          fonctionnelles
        </h1>

        <div className="flex w-full justify-start items-center m-3">
          <img
            src={require("../../assets/CheckSign.png")}
            alt="check"
            className="h-10 w-10"
          />
          <p className="text-purple">
            votre fichier ne doit pas contenir des lignes non nécessaires au
            début
          </p>
        </div>

        <div className="flex w-full justify-start items-center m-3">
          <img
            src={require("../../assets/CheckSign.png")}
            alt="check"
            className="h-10 w-10"
          />
          <p className="text-purple">
            la 1ère ligne de votre fichier doit débuter avec les en-têtes
            (titres) du fichier
          </p>
        </div>

        <div className="flex flex-col w-full justify-start m-3">
          <div className="flex w-full justify-start items-center">
            <img
              src={
                NecessaryHeadersMissing
                  ? require("../../assets/FalseSign.png")
                  : require("../../assets/CheckSign.png")
              }
              alt="check"
              className="h-10 w-10"
            />
            <p className="text-purple">
              votre fichier doit comporter des en-têtes nécessaires:
            </p>
          </div>

          <div className="w-96 mx-10">
            {" "}
            {requiredHeaders.map((header, index) => (
              <span className="text-purple"> {header} - </span>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-start items-center m-3">
          <img
            src={require("../../assets/CheckSign.png")}
            alt="check"
            className="h-10 w-10"
          />
          <p className="text-purple">
            votre fichier doit etre d'extension .xlsx ou .xls
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImportFile;
