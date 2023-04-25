import React from "react";
import SideBar from "../components/Menu/SideBar";
import DoctorantSearch from "../components/DoctorantSearch/DoctorantSearch";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";

function Doctorant() {
  return (
    <div className={`bg-white-bluish w-full h-screen flex `}>
      <SideBar />
      <div className={`grow flex flex-col justify-items-start h-full`}>
        <div className="flex justify-end">
          <ProfileIcon />
        </div>
        <DoctorantSearch/>
      </div>
    </div>
  );
}

export default Doctorant;
