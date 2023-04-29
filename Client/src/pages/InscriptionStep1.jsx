import React from "react";
import Inscription01 from "../components/Inscription01/Inscription01";
import SideBar from "../components/Menu/SideBar";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
import TimelineStepper from "../components/Timeline Stepper/TimelineStepper";

function InscriptionStep1() {
  return (
    <div className={`bg-white-bluish w-full h-full flex `}>
      <SideBar />
      <div className={`grow flex flex-col justify-between`}>
        <div className="flex justify-end">
          <ProfileIcon />
        </div>

        <div className="flex grow">
          <TimelineStepper currentStep={0} />
          <div className="flex flex-col flex-1 justify-center">
            <h1 className=" text-purple font-semibold text-2xl text-center">
              Step 01 : Les information personels du doctorant
            </h1>
            <Inscription01 className="grow h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InscriptionStep1;
