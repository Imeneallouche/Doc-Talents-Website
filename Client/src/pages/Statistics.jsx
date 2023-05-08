import React from "react";
import SideBar from "../components/Menu/SideBar";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
import StatsPageDataFetcher from "../Data/StatsPageDataFetcher";
import CriteriaBar from "../components/Statistics/CriteriaBar";
import { BarChart } from "../components/Statistics/BarChart";



function Statistics() {
  //Getting the data from the server using the DataFetcher

  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className={`grow flex flex-col justify-start`}>
        <div className="flex justify-end">
          <ProfileIcon />
        </div>
        <div className="flex justify-center">
          <CriteriaBar />
        </ div >  
        <div>
        <BarChart />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
