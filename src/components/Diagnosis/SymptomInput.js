import React from 'react';

const SymptomInput = ({ id, name, onChange }) => {
  const handleChange = (e) => {
    onChange(id, e.target.checked);
  };

  return (
    <div className="mb-2">
      <label>
        <input type="checkbox" onChange={handleChange} />
        <span className="ml-2">{name}</span>
      </label>
    </div>
  );
};

export default SymptomInput;
