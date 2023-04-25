import React from "react";

function TimelineStepper({ currentStep }) {
     
  const steps = [
    { image: "../../assets/SideBar/control.png", alt: "Step 1" },
    { image: "../../assets/SideBar/control.png", alt: "Step 2" },
    { image: "../../assets/SideBar/control.png", alt: "Step 3" },
    { image: "../../assets/SideBar/control.png", alt: "Step 4" },
    { image: "../../assets/SideBar/control.png", alt: "Step 5" },
  ];

  const progress = Math.floor((currentStep * 100) / steps.length);
  const currentStepImage = steps[currentStep].image;
  const currentStepAlt = steps[currentStep].alt;

  return (
    <div className="w-full h-16 flex items-center justify-between">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`w-full flex justify-center ${
            index <= currentStep ? "text-purple" : "text-green"
          }`}
        >
          <img
            src={step.image}
            alt={step.alt}
            className="h-8 w-8 mr-2"
          />
          <div className="text-sm">{step.alt}</div>
        </div>
      ))}
      <div className="w-full h-4 bg-gray-300 rounded-full relative">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 absolute"
          style={{ width: `${progress}%` }}
        >
          <span className="sr-only">{`${progress}%`}</span>
        </div>
        <img
          src={currentStepImage}
          alt={currentStepAlt}
          className="h-8 w-8 rounded-full bg-white absolute -top-2"
        />
      </div>
    </div>
  );
}

export default TimelineStepper;
