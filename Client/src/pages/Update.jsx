import React from "react";
import SideBar from "../components/Menu/SideBar";
import DoctorantUpdate from "../components/DoctorantUpdate/DoctorantUpdate";

function Update() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <DoctorantUpdate className={`grow`} />
    </div>
  );
}

export default Update;
