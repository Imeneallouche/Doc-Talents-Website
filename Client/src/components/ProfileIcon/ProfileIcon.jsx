import React from "react";

const ProfileIcon = () => {
  return (
    <a href="#" className="flex items-center justify-center">
      <span className="text-purple font-medium">DPGR member</span>
      <img
        className="border border-purple h-10 w-10 rounded-full object-cover mx-5 mt-2"
        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
        alt="Profile"
      />
    </a>
  );
};

export default ProfileIcon;
