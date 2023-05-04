import React from "react";
import SideBar from "../components/Menu/SideBar";
import Profilee from "../components/Profile/Profile";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";

function Profile() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className="grow flex flex-col justify-between">
      <Profilee/>
        <div className="flex justify-end">
          
          <ProfileIcon />
<<<<<<< HEAD
         
=======
>>>>>>> 911a0d3e6bce6b5ddca801e9893f30b7d4b3677c
        </div>
      </div>
    </div>
  );
}

export default Profile;
