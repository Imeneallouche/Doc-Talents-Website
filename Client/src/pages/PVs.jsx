import React from "react";
import SideBar from "../components/Menu/SideBar";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
import PVsAffich from "../components/PVsAffichage/PVsAffich";
function PVs() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className="grow flex flex-col justify-between">
        <div className="flex justify-end">
          <ProfileIcon />
        </div>
        <PVsAffich />
      </div>
    </div>
  );
}

export default PVs;
