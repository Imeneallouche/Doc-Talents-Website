import React from "react";
import SideBar from "../components/Menu/SideBar";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
import Cards from "../components/StatisticsCards/Cards";
import ShowCaseCard from "../components/StatisticsCards/ShowCaseCard";
import ShowCaseCard1 from "../components/StatisticsCards/ShowCaseCard1";
import ShowCaseCard2 from "../components/StatisticsCards/ShowCaseCard2";

function Dashboard() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className={`grow flex flex-col justify-start`}>
        <div className="flex justify-end">
          <ProfileIcon />
        </div>
        <Cards />
        <div className="flex justify-evenly items-end grow flex-1 mb-10">
          <ShowCaseCard2 className="flex-1" />
          <ShowCaseCard className="flex-1" />
          <ShowCaseCard1 className="flex-1" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
