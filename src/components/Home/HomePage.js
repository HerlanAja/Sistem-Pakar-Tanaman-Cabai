import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto p-20 flex items-center">
      <div className="w-1/2">
        <img src="../assets/tanamanCabai.jpg" alt="Tanaman Cabai" className="w-4/5 h-auto rounded-lg hover:shadow-lg" style={{marginRight: '2rem'}} />
      </div>
      <div className="w-1/2 pl-4">
        <h1 className="text-3xl font-bold mb-4">Selamat Datang di Sistem Pakar Diagnosa Penyakit Tanaman Cabai</h1>
        <p className="mb-4">
          Sistem ini adalah sebuah inovasi yang membantu petani dalam mendiagnosis penyakit pada tanaman cabai berdasarkan gejala-gejala yang diamati. 
          Dengan memanfaatkan teknologi kecerdasan buatan, sistem mampu menganalisis berbagai gejala seperti perubahan warna daun, penurunan produksi buah, 
          atau kerusakan pada batang, dan memberikan diagnosis yang cepat serta rekomendasi pengendalian yang sesuai. Melalui antarmuka yang intuitif, 
          petani dapat dengan mudah memasukkan gejala yang teramati pada tanaman cabai mereka. Diharapkan sistem ini dapat membantu mengurangi kerugian akibat serangan penyakit, 
          meningkatkan produktivitas pertanian, serta mendukung pembangunan sektor pertanian yang berkelanjutan.
        </p>
        <Link to="/diagnosis" className="bg-blue-500 text-white px-4 py-2 rounded">
          Mulai Diagnosa
        </Link>
        <Link to="/disease-info" className="ml-4 bg-green-500 text-white px-4 py-2 rounded">
          Info Penyakit
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
