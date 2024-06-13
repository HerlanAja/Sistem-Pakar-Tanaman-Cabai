// DiagnosisService.js

import { diseases } from '../data/diseases'; // Import struktur data penyakit
import { symptoms } from '../data/symptoms'; // Import struktur data gejala

const DiagnosisService = {
  diagnose: (symptomCodes) => {
    let matchedDisease = null;

    // Ubah kode gejala menjadi daftar gejala yang sesuai
    const matchedSymptoms = symptomCodes.map(code => symptoms.find(symptom => symptom.code === code));

    // Lakukan pencocokan gejala dengan aturan penyakit
    for (const disease of diseases) {
      // Periksa apakah semua gejala penyakit ditemukan dalam gejala yang diberikan
      if (disease.symptoms.every(diseaseSymptom => matchedSymptoms.some(matchedSymptom => matchedSymptom.code === diseaseSymptom))) {
        matchedDisease = disease;
        break; // Berhenti pencarian setelah menemukan penyakit yang cocok
      }
    }

    return matchedDisease;
  },
};

export default DiagnosisService;
