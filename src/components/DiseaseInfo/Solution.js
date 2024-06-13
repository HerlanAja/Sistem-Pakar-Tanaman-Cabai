import React from 'react';

const Solution = ({ solution }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Solusi Penanganan</h2>
      <p>{solution}</p>
    </div>
  );
};

export default Solution;
