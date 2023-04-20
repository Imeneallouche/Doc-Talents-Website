import Inscription01 from "../components/Inscription01/Inscription01";
import Inscription02 from "../components/Inscription02/Inscription02";
import Inscription03 from "../components/Inscription03/Inscription03";
import SideBar from "../components/Menu/SideBar";

import { useState } from "react";
import Menu from "../components/Menu/SideBar";

//import './App.css';
/*
export default function Inscription() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = 3;

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const setProgressBar = (curStep) => {
    const percent = parseFloat(100 / steps) * curStep;
    return percent.toFixed();
  };

  return (
    <div>
      <Menu />;
      <div>
        <ul className="progressbar">
          <li className={currentStep >= 1 ? "active" : ""}></li>
          <li className={currentStep >= 2 ? "active" : ""}></li>
          <li className={currentStep === 3 ? "active" : ""}></li>
        </ul>

        <form>
          <fieldset className={currentStep === 1 ? "active" : ""}>
            <h2>Step 1</h2>
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </fieldset>

          <fieldset className={currentStep === 2 ? "active" : ""}>
            <h2>Step 2</h2>
            <button type="button" onClick={prevStep}>
              Previous
            </button>
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </fieldset>

          <fieldset className={currentStep === 3 ? "active" : ""}>
            <h2>Step 3</h2>
            <button type="button" onClick={prevStep}>
              Previous
            </button>
            <button type="submit">Submit</button>
          </fieldset>
        </form>

        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${setProgressBar(currentStep)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
*/

function Inscription() {
  return (
    <div className={`bg-white-bluish w-full flex`}>
      <SideBar />
      <Inscription03 className={`grow`} />
    </div>
  );
}

export default Inscription;
