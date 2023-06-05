import React from "react";
import Inscription02 from "../components/Inscription02/Inscription02";
import SideBar from "../components/Menu/SideBar";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
import TimelineStepper from "../components/Timeline Stepper/TimelineStepper";

function InscriptionStep2() {
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className={`grow flex flex-col justify-between`}>
        <div className="flex justify-end">
          <ProfileIcon />
        </div>

        <div className="flex grow">
          <TimelineStepper currentStep={2} />
          <div className="flex flex-col flex-1 justify-center">
            <h1 className=" text-purple font-semibold text-2xl text-center">
              Etape 02 : Les informations sur la thèse
            </h1>
            <Inscription02 className="grow h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InscriptionStep2;
