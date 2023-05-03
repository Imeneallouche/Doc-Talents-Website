import React from "react";
import Inscription03 from "../components/Inscription03/Inscription03";
import SideBar from "../components/Menu/SideBar";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
import TimelineStepper from "../components/Timeline Stepper/TimelineStepper";
import { useLocation } from "react-router-dom";

function InscriptionStep3() {
  const location = useLocation();
  let { info } = location.state;

  //const type = 1;
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className={`grow flex flex-col justify-between`}>
        <div className="flex justify-end">
          <ProfileIcon />
        </div>

        <div className="flex grow">
          <TimelineStepper currentStep={3} />
          <div className="flex flex-col flex-1 justify-center">
            <h1 className=" text-purple font-semibold text-2xl text-center">
              Inscrivez votre {info.type == 0 ? "Co Encadreur" : "Encadreur"} :{" "}
              {info.type == 2 ? info.name1 : info.name}
            </h1>
            <Inscription03 className="grow h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InscriptionStep3;
