import React from "react";
import Inscription01 from "../components/Inscription01/Inscription01";
import SideBar from "../components/Menu/SideBar";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
import TimelineStepper from "../components/Timeline Stepper/TimelineStepper";

function InscriptionStep1() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className={`grow flex flex-col justify-between`}>
        <div className="flex justify-end">
          <ProfileIcon />
        </div>
        <Inscription01 />
        <TimelineStepper currentStep={1} />
      </div>
    </div>
  );
}

export default InscriptionStep1;
