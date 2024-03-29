import React from "react";
import SideBar from "../components/Menu/SideBar";
import ProfileEncadreur from "../components/ProfileEncadreur/ProfileEncadreur";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";

function profileenc() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className="grow flex flex-col justify-between">
        <div className="flex justify-end">
          <ProfileIcon />
        </div>
        <ProfileEncadreur />
      </div>
    </div>
  );
}

export default profileenc;
