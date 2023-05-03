import React from "react";
import SideBar from "../components/Menu/SideBar";
import Profilee from "../components/Profile/Profile";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";

function Profile() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className="grow flex flex-col justify-between">
        <Profilee />
        <div className="flex justify-end">
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
}

export default Profile;
