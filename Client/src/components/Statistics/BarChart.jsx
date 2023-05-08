import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Element",
    "Count",
    { role: "style" },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify",
    },
  ],
  ["Total", 4, "#b87333", null],
  ["Male", 1, "#b87333", null],
  ["Female", 3, "#b87333", null],
  ["Average Male", 0.25, "silver", null],
  ["Average Female", 0.75, "#2b2b2b", null],
  ["List Total", 4, "color: #ffd251", null],
  ["List Male", 1, "color: #ffd251", null],
  ["List Female", 3, "color: #ffd251", null],
];

export const options = {
  title: "nombre d’inscription",
  width: 450,
  height: 350,
  bar: { groupWidth: "85%" },
  legend: { position: "none" },
  backgroundColor: "#ffffff", 
};

export function BarChart() {
  return (
    <div
    style={{
      height: "370px",
      width: "470px",
      margin: "10px 20px",
      position: "relative",
      borderRadius: "18px",
      backgroundColor: "#fdfdff",
      border: "2px solid #ffffff",
      boxShadow:
        "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
    }}>
        <div className="ml-4 mt-4">
        <Chart
      chartType="BarChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
      chartWrapperParams={{ css: "border-radius: 8px;" }} // Apply border radius directly to the chart component
    />
        </div>
    </div>
  
  

    
  );
}
