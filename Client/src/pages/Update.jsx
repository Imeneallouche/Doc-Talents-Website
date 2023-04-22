import React from "react";
import SideBar from "../components/Menu/SideBar";
import DoctorantUpdate from "../components/DoctorantUpdate/DoctorantUpdate";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";

function Update() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className={`grow flex flex-col justify-items-start`}>
        <div className="flex justify-end">
          <ProfileIcon />
        </div>
        <DoctorantUpdate />
      </div>
    </div>
  );
}

export default Update;
