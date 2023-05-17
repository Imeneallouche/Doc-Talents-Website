import React from "react";
import SideBar from "../components/Menu/SideBar";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
import ImportFile from "../components/ImportFile/ImportFile";

function ImportExcelFile() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className={`grow flex flex-col justify-start items-center`}>
        <div className="flex justify-end w-full">
          <ProfileIcon />
        </div>
        <div className="grow flex justify-center items-center">
          <ImportFile />
        </div>
      </div>
    </div>
  );
}

export default ImportExcelFile;
