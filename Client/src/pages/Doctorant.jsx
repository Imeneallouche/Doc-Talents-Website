import React from "react";
import SideBar from "../components/Menu/SideBar";
import DoctorantSearch from "../components/DoctorantSearch/DoctorantSearch";

function Doctorant() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <DoctorantSearch className={`grow`} />
    </div>
  );
}

export default Doctorant;
