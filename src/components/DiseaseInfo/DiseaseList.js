import React from 'react';
import { Link } from 'react-router-dom';

const diseases = [
  {
    code: 'P001',
    name: 'Penyakit Layu Bakteri',
    description: 'Gejala: Daun menguning, daun menguning dan rontok, batang mengalami pembusukan basah.',
  },
  {
    code: 'P002',
    name: 'Penyakit Bercak Daun',
    description: 'Gejala: Bercak coklat pada daun, bercak meluas membentuk lingkaran.',
  },
  {
    code: 'P003',
    name: 'Penyakit Busuk Buah',
    description: 'Gejala: Buah membusuk dan mengering, buah mengeluarkan cairan, bercak coklat pada buah.',
  },
  {
    code: 'P004',
    name: 'Penyakit Layu Fusarium',
    description: 'Gejala: Daun menguning dan mengering, tanaman layu secara permanen, pembuluh batang membusuk.',
  },
];

const DiseaseList = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Daftar Penyakit Tanaman Cabai</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {diseases.map(disease => (
          <div key={disease.code} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">{disease.name}</h3>
            <p className="text-gray-700 mb-4">{disease.description}</p>
            <Link
              to={`/disease-info/${disease.code}`}
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiseaseList;
