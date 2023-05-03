import React from "react";
import { Link,  useParams } from 'react-router-dom';


//src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
const ProfileIcon = () => {
  return (
    <a href="#" className="flex items-center justify-center m-5 p-2 rounded-xl ">
      <img
         
        className="border border-purple h-10 w-10 rounded-full object-cover mr-5"
        src={require("../../assets/Avatars/M2.png")}
        alt="Profile"
      />

      <span className="text-purple font-medium">DPGR member</span>
    </a>
  );
};

export default ProfileIcon;
