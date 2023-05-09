import React from "react";
import SideBar from "../components/Menu/SideBar";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
import StatsPageDataFetcher from "../Data/StatsPageDataFetcher";
import CriteriaBar from "../components/Statistics/CriteriaBar";
import { BarChart } from "../components/Statistics/BarChart";
import ProgressBarChart from "../components/Statistics/ProgressBarChart";


function Statistics() {
  // Getting the data from the server using the DataFetcher

  return (
    <div className="bg-white-bluish w-full flex">
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
          <CriteriaBar />
        </div>
        {/* Bar chart */}
        <div className="mt-10">
          <BarChart />
        </div>
        {/* Progress bar */}
        <div>
          <ProgressBarChart />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
