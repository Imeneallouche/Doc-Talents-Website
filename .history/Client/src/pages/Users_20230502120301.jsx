import React from "react";
import SideBar from "../components/Menu/SideBar";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
import users from "../components/Users/Users";

function Users() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className="grow flex flex-col justify-between">
        <div className="flex justify-end">
          <ProfileIcon />
        </div>
         user
      </div>
    </div>
  );
}

export default Users;
