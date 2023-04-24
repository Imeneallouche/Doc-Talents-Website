import React from "react";
import Inscription03 from "../components/Inscription03/Inscription03";
import SideBar from "../components/Menu/SideBar";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";

function InscriptionStep3() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className={`grow flex flex-col justify-between`}>
        <div className="flex justify-end">
          <ProfileIcon />
        </div>
        <Inscription03 />
      </div>
    </div>
  );
}

export default InscriptionStep3;
