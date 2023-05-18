import React from "react";
import { ReactComponent as RandomGraph } from "../../assets/randomGraph.svg";

const ProgressBarChart = ({critere, count}) => {
  var  title= "";
  if (critere === "sup10") {
    title = "Le progrés de doctorants  d'années d'inscription supèrieure à 10 ans par rapport à tous les années d'inscription";
  }
  if (critere === "entre5_10") {
    title = "Le progrés de doctorants  d'années d'inscription entre 5 et 10 ans par rapport à tous les années d'inscription";
  }
  if (critere === "inf5") {
    title = "Le progrés de doctorants  d'années d'inscription infèrieure à 5 ans par rapport à tous les années d'inscription";
  }
  if (critere !== "inf5" && critere !== "entre5_10" && critere !== "sup10") {
    title = `Le progrés de doctorants  ${critere}s ans par rapport à tous les années d'inscription`;
  }
  const widthPercentage = (count / 25) * 100;
  return (
    <div
      style={{
        height: "250px",
        width: "470px",
        margin: "10px 20px",
        position: "relative",
        borderRadius: "18px",
        backgroundColor: "#fdfdff",
        border: "2px solid #ffffff",
        boxShadow:
          "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          fontSize: "16px",
          marginRight : "80px",
          color: "#35468e",
          fontWeight: 900,
        }}
      >
        {title}
      </div>
      <div>
        <div
          style={{
            position: "absolute",
            top: "120px",
            left: "20px",
            fontSize: "28px",
            color: "#e78f69",
            fontWeight: 500,
          }}
        >
          {count}
        </div>
        <div
          style={{
            position: "absolute",
            top: "100px",
            left: "230px",
          }}
        >
          <RandomGraph width="216" height="79" viewBox="0 0 216 79" fill="none" />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "210px",
          left: "20px",
          width: "430px",
        }}
      >
        <div className="w-full bg-gray rounded-full h-2.5 dark:bg-gray">
          <div
        className="bg-green h-2.5 rounded-full"
    style={{ width: `${widthPercentage}%` }}
  >
  </div>
  </div>
    <div className="flex justify-between mt-1 text-xs text-gray-500">
      <span style={{ fontSize: "16px", color: "#51bca2", fontWeight: 900 }}
      >{parseInt(widthPercentage)}%</span>
      </div>
      </div>
    </div>
  );
};

export default ProgressBarChart;
