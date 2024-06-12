import React, { useState } from 'react';

const BoxForm = ({ addBox }) => {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color && size) {
      addBox({ color, size: parseInt(size, 10) });
      setColor('');
      setSize('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Color: </label>
        <input 
          type="text" 
          value={color} 
          onChange={(e) => setColor(e.target.value)} 
        />
      </div>
      <div>
        <label>Tamaño: </label>
        <input 
          type="number" 
          value={size} 
          onChange={(e) => setSize(e.target.value)} 
        />
      </div>
      <button type="submit">Agregar Cuadro</button>
    </form>
  );
};

export default BoxForm;
