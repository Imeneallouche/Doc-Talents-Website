import React from "react";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
import SideBar from "../components/Menu/SideBar";

function Statistics() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className="grow flex flex-col justify-between">
        <div className="flex justify-end">
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
