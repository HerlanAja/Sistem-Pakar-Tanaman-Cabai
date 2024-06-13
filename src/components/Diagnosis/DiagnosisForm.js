import React, { useState } from 'react';

const DiagnosisForm = ({ onResult, rules }) => {
  const [currentSymptomIndex, setCurrentSymptomIndex] = useState(0);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const symptoms = [
    { code: 'G001', name: 'Daun menguning' },
    { code: 'G002', name: 'Daun menguning dan rontok' },
    { code: 'G003', name: 'Batang mengalami pembusukan basah' },
    { code: 'G004', name: 'Bercak coklat pada daun' },
    { code: 'G005', name: 'Bercak meluas membentuk lingkaran' },
      { code: 'G006', name: 'Buah membusuk dan mengering' },
      { code: 'G007', name: 'Buah mengeluarkan cairan' },
      { code: 'G008', name: 'Bercak coklat pada buah' },
    { code: 'G009', name: 'Daun menguning dan mengering' },
    { code: 'G010', name: 'Tanaman layu secara permanen' },
    { code: 'G011', name: 'Pembuluh batang membusuk' },
  ];

  const handleYes = () => {
    setSelectedSymptoms([...selectedSymptoms, symptoms[currentSymptomIndex].code]);
    nextSymptom();
  };

  const handleNo = () => {
    nextSymptom();
  };

  const nextSymptom = () => {
    if (currentSymptomIndex < symptoms.length - 1) {
      setCurrentSymptomIndex(currentSymptomIndex + 1);
    } else {
      diagnose();
    }
  };

  const diagnose = () => {
    for (const rule of rules) {
      if (rule.symptoms.every(symptom => selectedSymptoms.includes(symptom))) {
        onResult(rule.disease, rule.solution);
        return;
      }
    }
    onResult('Tidak dapat menentukan penyakit', 'Silakan konsultasi dengan ahli.');
  };

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-center mb-4">
        <img src="../assets/tanamanCabai.jpg" alt="Tanaman Cabai" className="mx-auto w-3/4 h-auto rounded-lg shadow-lg" style={{ maxWidth: '600px', maxHeight: '400px' }} />
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center">Diagnosa Penyakit Tanaman Cabai</h2>
      <div className="relative mb-6 text-center">
        <div className="h-2 w-2 bg-red-500 rounded-full absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="h-2 w-2 bg-green-500 rounded-full absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        <p className="mb-4">{symptoms[currentSymptomIndex].name}</p>
      </div>
      <div className="flex justify-center space-x-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md" onClick={handleYes}>Ya</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md" onClick={handleNo}>Tidak</button>
      </div>
    </div>
  );
};

export default DiagnosisForm;
