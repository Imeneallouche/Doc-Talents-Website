import React, { useState } from "react";

export const FormDataContext = React.createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    Nom: "",
    Prenom: "",
    Id_Doctorant: "",
    Id_PV: "",
    Numero_tel: "",
    Email: "",
    Birthday: {
      startDate: new Date(),
      endDate: new Date().setMonth(11),
    },
    Sex: [],
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
