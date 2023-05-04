import React from "react";
import SideBar from "../components/Menu/SideBar";
import Editprofile from "../components/Editprofile/Editeprofile";
import ProfileIcon from

function editprofile() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
    <SideBar />
    <div className={`grow flex flex-col justify-between`}>
      <div className="flex justify-end">
        <ProfileIcon />
      </div>
      <Editprofile />
    </div>
  </div>
  );
}

export default editprofile;