import { useState } from "react";
import { NavLink } from "react-router-dom";

function TimelineStepper() {
  const data = [
    {
      svg: "http://www.w3.org/2000/svg",
    },
    { svg: "http://www.w3.org/2000/svg" },
    { svg: "http://www.w3.org/2000/svg" },
    {},
  ];

  return <div></div>;
}

export default TimelineStepper;
function PersonalInfoForm({ goToNextStep }) {
  // implement personal info form
}

function AccountInfoForm({ goToNextStep, goToPreviousStep }) {
  // implement account info form
}

function ReviewForm({ goToPreviousStep }) {
  // implement review form
}
