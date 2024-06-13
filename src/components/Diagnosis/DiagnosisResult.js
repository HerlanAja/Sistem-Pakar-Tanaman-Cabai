import React from 'react';

const DiagnosisResult = ({ disease, solution, onReset }) => {
  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Hasil Diagnosa</h2>
      <p className="mb-4"><strong>Penyakit:</strong> {disease}</p>
      <p className="mb-4"><strong>Solusi:</strong> {solution}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md" onClick={onReset}>
        Diagnosa Ulang
      </button>
    </div>
  );
};

export default DiagnosisResult;
