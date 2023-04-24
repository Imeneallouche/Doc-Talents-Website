import React from "react";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
import SideBar from "../components/Menu/SideBar";
import EncadrantCard from "../components/EncadrantCard/EncadrantCard";

function ConfirmEndacrant() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className={`grow flex flex-col justify-start`}>
        <div className="flex justify-end">
          <ProfileIcon />
        </div>

        <div className="flex flex-col justify-center items-center m-5">
          <h1 className="text-4xl text-purple">Confirmation de l'identité</h1>
          <h2 className="text-3xl text-light-purple">Des Encadrants</h2>
        </div>
        
        <div className="flex items-center justify-center">
          <EncadrantCard />
          <EncadrantCard />
        </div>
      </div>
    </div>
  );
}

export default ConfirmEndacrant;
