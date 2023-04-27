import React from "react";
import SideBar from "../components/Menu/SideBar";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
import Cards from "../components/StatisticsCards/Cards";
import ShowCaseCard from "../components/StatisticsCards/ShowCaseCard";
/*

          <iframe
            className="w-80 h-80"
            src="https://lottie.host/?file=cb69bfed-a97d-4e01-88d5-770d96184286/dd5NQnhLfz.json"
          />

*/

function Dashboard() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className={`grow flex flex-col justify-start`}>
        <div className="flex justify-end">
          <ProfileIcon />
        </div>
        <Cards />
        <div className="flex justify-center grow">
          <ShowCaseCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
