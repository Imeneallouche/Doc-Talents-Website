import React from "react";
import SideBar from "../components/Menu/SideBar";
import Profile from "../components/Profile/Profile";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";

function profile() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className="grow flex flex-col justify-between">
        <div className="flex justify-end">
          <ProfileIcon />
        </div>
        <Profile />
      </div>
    </div>
  );
}

export default profile;
