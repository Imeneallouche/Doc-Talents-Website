import React from "react";
import { Chart } from "react-google-charts";


export function BarChart({ data,critere1, critere2, startYear, endYear }){
  if (critere1 === "sup10") {
    critere1 = "d'années d'inscription supèrieure à 10 an";
  }
  if (critere1 === "entre5_10") {
    critere1 = "d'années d'inscription entre 5 et 10 an";
  }
  if (critere1 === "inf5") {
    critere1 = "d'années d'inscription infèrieure à 5 an";
  }
  if (critere2 === "sup10") {
    critere2 = "d'années d'inscription supèrieure à 10 an";
  }
  if (critere2 === "entre5_10") {
    critere2 = "d'années d'inscription entre 5 et 10 an";
  }
  if (critere2 === "inf5") {
    critere2 = "d'années d'inscription infèrieure à 5 ans";
  }

  const options = {
    title: `nombre de doctoronats ${critere1.toLowerCase()}s ${critere2.toLowerCase()}s en doctorat entre ${startYear} et ${endYear}`,
    width: 450,
    height: 350,
    bar: { groupWidth: "85%" },
    legend: { position: "none" },
    backgroundColor: "#ffffff",
    titleTextStyle: {
      fontSize: "16px",
      color: "#35468e",
      fontWeight: 900,
    }, 
  };


  console.log("here is the data that you entered to the bar chart");
  console.log(data);
  if (data == null){
    console.log("data is null");
  }

  const chartData = [
    ["Element", "Count", { role: "style" }],
    ["Total", data.nbDoctorants,  "#e78f69"],
  ];

  // Add entries for each year between min and max
  for (let year = startYear; year <= endYear; year++) {
    const index = year - startYear;
    const count = data.list[index];
    chartData.push([`${year}`, count, "#1e2958"]);
  }
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
      data={chartData}
      options={options}
      chartWrapperParams={{ css: "border-radius: 8px;" }} // Apply border radius directly to the chart component
    />
        </div>
    </div>

    
  );
}
