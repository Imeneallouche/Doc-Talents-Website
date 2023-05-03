import React from "react";
import SideBar from "../components/Menu/SideBar";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
import PVsAdd from "../components/PVsAjouter/PVsAdd";

function PVformulaire() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className="grow flex flex-col justify-between">
        <div className="flex justify-end">
          <ProfileIcon />
        </div>
          <PVsAdd />
      </div>
    </div>
  );
}

export default PVformulaire;
