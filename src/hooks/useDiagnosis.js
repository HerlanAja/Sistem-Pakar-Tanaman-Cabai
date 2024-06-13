import { useDiagnosisContext } from '../context/DiagnosisContext';

const useDiagnosis = () => {
  const { diagnosis, storeDiagnosis, resetDiagnosis } = useDiagnosisContext();

  return {
    diagnosis,
    storeDiagnosis,
    resetDiagnosis,
  };
};

export default useDiagnosis;
