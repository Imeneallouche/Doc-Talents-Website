import React from "react";
import Inscription02 from "../components/Inscription02/Inscription02";
import SideBar from "../components/Menu/SideBar";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";

function InscriptionStep2() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className={`grow flex flex-col justify-between`}>
        <div className="flex justify-end">
          <ProfileIcon />
        </div>
        <Inscription02 />
      </div>
    </div>
  );
}

export default InscriptionStep2;
