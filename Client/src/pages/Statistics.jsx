import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
import SideBar from "../components/Menu/SideBar";
import CriteriaBar from "../components/Statistics/CriteriaBar";
import Cards from "../components/Statistics/Cards";
import { BarChart } from "../components/Statistics/BarChart";
import ProgressBarChart from "../components/Statistics/ProgressBarChart";

function Statistics() {
  const RUNNING_URL = "http://localhost:5000";
  const ENDPOINT = "/Statistics/";

  const defaultData = {
    nbDoctorants: 16,
    moyenne: 1.1428571428571428,
    max: 2020,
    min: "2010",
    list: [0, 0, 2, 3, 5, 8, 6, 6, 6, 6, 14, 14, 6, 2],
  };

  const [data, setData] = useState(defaultData);
  const [critere1, setCritere1] = useState("Femme");
  const [critere2, setCritere2] = useState("inscrit");
  const [startYear, setStartYear] = useState("2010");
  const [endYear, setEndYear] = useState("2023");
  const handleCriteriaChange = async (
    critere1,
    critere2,
    premiere_annee,
    derniere_annee
  ) => {
    console.log(critere1, critere2, premiere_annee, derniere_annee);
    try {
      const response = await axios.get(RUNNING_URL + ENDPOINT, {
        params: {
          critere1: critere1,
          critere2: critere2,
          premiere_annee: premiere_annee,
          derniere_annee: derniere_annee,
        },
      });

      if (response.data == null) {
        console.log("data is null");
      } else {
        console.log("data is not null");
        console.log(response.data);
        setData(response.data); // Update the state with the fetched data
        setCritere1(critere1);
        setCritere2(critere2);
        setStartYear(premiere_annee);
        setEndYear(derniere_annee);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [critere, setCritere] = useState("inscrit");

  useEffect(() => {
    if (critere1 !== "Femme" && critere1 !== "Homme") {
      setCritere(critere1);
    } else {
      setCritere(critere2);
    }
  }, [critere1, critere2]);

  return (
    <div className="bg-white-bluish w-full flex ">
      <div style={{ position: "fixed", top: 0, bottom: 0 }}>
        {/* Sidebar component */}
        <SideBar />
      </div>
      <div className="flex flex-col justify-start ml-64">
        {/* Profile icon */}
        <div className="flex justify-end">
          <ProfileIcon />
        </div>
        {/* Criteria bar */}
        <div className="flex justify-center ml-20">
          <CriteriaBar onCriteriaChange={handleCriteriaChange} />
        </div>

        <div className="flex flex-col">
          <div className="mt-10">
            <BarChart
              data={data}
              critere1={critere1}
              critere2={critere2}
              startYear={startYear}
              endYear={endYear}
            />
          </div>

          <div className="absolute right-0 mt-1/2 p-16 mr-4">
            <div className="flex gap-12 mt-12">
              <Cards
                title={critere1}
                s
                count={`${data.nbDoctorants} Doctorants`}
              />
              <Cards title="Moyenne" count={data.moyenne} />
            </div>
            <div className="flex gap-12 mt-12">
              <Cards
                title="Année du plus d'inscription de doctorants"
                count={data.max}
              />
              <Cards
                title="Année du moin d'inscription de doctorants"
                count={data.max}
              />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <ProgressBarChart critere={critere} count={data.nbDoctorants} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
