import React from 'react';

const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sistem Pakar Tanaman Cabai</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Diagnosa</a>
          <a href="#" className="hover:underline">Info Penyakit</a>
          <a href="#" className="hover:underline">Kontak</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
