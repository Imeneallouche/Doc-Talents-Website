import React from "react";

function TimelineStepper({ currentStep }) {
  const steps = [
    {
      image: "Search",
      alt: "générales",
      explanation: "informations",
    },

    {
      image: "Calendar",
      alt: "de thèse",
      explanation: "informations",
    },

    {
      image: "Chart",
      alt: "des encadrants",
      explanation: "informations",
    },

    {
      image: "Setting",
      alt: "les encadrants",
      explanation: "Confirmer",
    },
  ];

  const progress = Math.floor((currentStep * 100) / steps.length);

  return (
    <div className="ml-10 mb-20 flex flex-col items-start justify-between">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex justify-center ${
            index >= currentStep ? "text-purple" : "text-green"
          }`}
        >
          <img
            src={require(`../../assets/SideBar/${step.image}.png`)}
            alt={step.alt}
            className={`h-12 w-12 p-3 mr-2 rounded-full bg-dark-purple ${
              index >= currentStep ? "bg-purple" : "bg-green"
            }`}
          />
          <div className="text-sm flex flex-col">
            <h1>{step.explanation}</h1>
            <h2> {step.alt}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TimelineStepper;
