// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Sistem Pakar Tanaman Cabai</h1>
        <div className="space-x-4">
          <Link to="/home" className="hover:underline">Home</Link> {/* Perbarui tautan dengan Link */}
          <Link to="/diagnosis" className="hover:underline">Diagnosa</Link>
          <Link to="/disease-info" className="hover:underline">Info Penyakit</Link>
          <Link to="/contact" className="hover:underline">Kontak</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
