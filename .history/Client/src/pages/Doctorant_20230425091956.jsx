import React from "react";
import SideBar from "../components/Menu/SideBar";
import DoctorantSearch from "../components/DoctorantSearch/DoctorantSearch.jsx";
import DoctorantSearch from "../components/DoctorantSearch/DoctorantSearch";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";

export default function Doctorant() {
  return (
<<<<<<< HEAD
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <DoctorantSearch className={`grow`} />
=======
    <div className={`bg-white-bluish w-full h-screen flex `}>
      <SideBar />
      <div className={`grow flex flex-col justify-items-start h-full`}>
        <div className="flex justify-end">
          <ProfileIcon />
        </div>
        <DoctorantSearch/>
      </div>
>>>>>>> 7f47dd1717849cd5d4a1fd73cb9614aad3544921
    </div>
  );
}

