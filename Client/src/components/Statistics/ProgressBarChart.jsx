import React from "react";
import { ReactComponent as RandomGraph } from "../../assets/randomGraph.svg";

const ProgressBarChart = (props) => {
  return (
    <div
      style={{
        height: "200px",
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
          color: "#35468e",
          fontWeight: 900,
        }}
      >
        Inscrit
      </div>
      <div>
        <div
          style={{
            position: "absolute",
            top: "70px",
            left: "20px",
            fontSize: "28px",
            color: "#e78f69",
            fontWeight: 500,
          }}
        >
          218
        </div>
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "230px",
          }}
        >
          <RandomGraph width="216" height="79" viewBox="0 0 216 79" fill="none" />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "160px",
          left: "20px",
          width: "430px",
        }}
      >
        <div className="w-full bg-gray rounded-full h-2.5 dark:bg-gray">
          <div
            className="bg-green h-2.5 rounded-full"
            style={{ width: "45%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarChart;
