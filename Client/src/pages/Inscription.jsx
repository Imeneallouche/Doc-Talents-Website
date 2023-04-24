import Inscription01 from "../components/Inscription01/Inscription01";
import Inscription02 from "../components/Inscription02/Inscription02";
import Inscription03 from "../components/Inscription03/Inscription03";

import SideBar from "../components/Menu/SideBar";

import TimelineStepper from "../components/Timeline Stepper/TimelineStepper";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";

import { useState } from "react";
// <Inscription01 className={`grow`} />;

function Inscription() {
  const [pgNo, setPgNo] = useState(1);

  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className={`grow flex flex-col justify-between`}>
        <div className="flex justify-end">
          <ProfileIcon />
        </div>
        {pgNo == 1 ? (
          <Inscription01 />
        ) : pgNo == 2 ? (
          <Inscription02 />
        ) : (
          <Inscription03 />
        )}
      </div>
    </div>
  );
}

/*
<div className="flex justify-center ">
          {pgNo > 1 && (
            <button
              className="submit-form suivant m-5 px-8 py-4 w-fit bg-dark-purple rounded-md text-white"
              type="button"
              onClick={() => setPgNo(pgNo - 1)}
            >
              Précédant
            </button>
          )}

          {pgNo < 3 && (
            <button
              className="submit-form suivant m-5 px-8 py-4 w-fit bg-dark-purple rounded-md text-white"
              type="button"
              onClick={() => setPgNo(pgNo + 1)}
            >
              Suivant
            </button>
          )}
        </div>
*/
export default Inscription;
