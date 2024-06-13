import React from 'react';
import { useParams } from 'react-router-dom';

const diseaseInfo = {
  P001: {
    name: 'Penyakit Layu Bakteri',
    description: 'Gejala: Daun menguning, daun menguning dan rontok, batang mengalami pembusukan basah.',
    solution: 'Menggunakan bakterisida, membakar tanaman yang terserang.'
  },
  P002: {
    name: 'Penyakit Bercak Daun',
    description: 'Gejala: Bercak coklat pada daun, bercak meluas membentuk lingkaran.',
    solution: 'Menyemprotkan fungisida, membakar tanaman yang terserang.'
  },
  P003: {
    name: 'Penyakit Busuk Buah',
    description: 'Gejala: Buah membusuk dan mengering, buah mengeluarkan cairan, bercak coklat pada buah.',
    solution: 'Memangkas bagian tanaman yang terserang.'
  },
  P004: {
    name: 'Penyakit Layu Fusarium',
    description: 'Gejala: Daun menguning dan mengering, tanaman layu secara permanen, pembuluh batang membusuk.',
    solution: 'Menggunakan fungisida, membakar tanaman yang terserang.'
  },
};

const DiseaseDetail = () => {
  const { code } = useParams();
  const disease = diseaseInfo[code];

  if (!disease) {
    return <p>Penyakit tidak ditemukan.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{disease.name}</h2>
      <p className="mb-4">{disease.description}</p>
      <p className="font-bold">Solusi:</p>
      <p>{disease.solution}</p>
    </div>
  );
};

export default DiseaseDetail;
