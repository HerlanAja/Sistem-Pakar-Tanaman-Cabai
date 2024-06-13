import React, { createContext, useContext, useState } from 'react';

const DiagnosisContext = createContext();

export const useDiagnosisContext = () => {
  return useContext(DiagnosisContext);
};

export const DiagnosisProvider = ({ children }) => {
  const [diagnosis, setDiagnosis] = useState(null);

  const storeDiagnosis = (disease, solution) => {
    setDiagnosis({ disease, solution });
  };

  const resetDiagnosis = () => {
    setDiagnosis(null);
  };

  return (
    <DiagnosisContext.Provider value={{ diagnosis, storeDiagnosis, resetDiagnosis }}>
      {children}
    </DiagnosisContext.Provider>
  );
};
