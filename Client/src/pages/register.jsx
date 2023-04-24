import React from "react";
import axios from "axios";

import Inscription01 from "../components/Inscription01/Inscription01";
import Inscription02 from "../components/Inscription02/Inscription02";
import Inscription03 from "../components/Inscription03/Inscription03";

steps = [
  { id: 1, name: "Step 1", component: Inscription01 },
  { id: 2, name: "Step 2", component: Inscription02 },
  { id: 3, name: "Step 3", component: Inscription03 },
];

MultiStepForm = () => {
  const [formData, setFormData] = {
    Nom: "",
    Prenom: "",
    Id_Doctorant: "",
    Id_PV: "",
    Numero_tel: "",
    Email: "",
    Birthday: "",
    Sex: "",

    DirecteurThese: "",
    CoDirecteurThese: "",
    Laboratoire: "",
    Option: "",
    TypeDoctorant: "",
    IntituleSujet: "",
    EtablissementMaster: "",
    EtablissementIngeniorat: "",
    EtablissementMagestere: "",
    PremiereInscription: "",

    Nom: "",
    Prenom: "",
    Etablissement: "",
    Diplome: "",
    Grade: "",
    Telephone: "",
    Email: "",
    Specialite: "",
    SujetInteret: "",
  };

  const [currentStep, setCurrentStep] = 1;

  handleSubmit = async () => {
    try {
      response = await axios.post("/Update", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  currentStep = steps.find((step) => step.id === currentStep).component;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CurrentStep
          formData={formData}
          setFormData={setFormData}
          navigation={{ next: handleNext, previous: handlePrevious }}
        />
        {currentStep === steps.length ? (
          <button type="submit">Submit</button>
        ) : null}
      </form>
    </div>
  );
};

export default MultiStepForm;
