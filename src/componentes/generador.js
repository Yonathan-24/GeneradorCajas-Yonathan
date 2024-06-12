import React, { useState } from 'react';

// Estilos en línea para los cuadros y el contenedor
const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '20px',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5px',
  },
};

const BoxGenerator = () => {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color && size) {
      const newBox = { color, size: parseInt(size, 10) };
      setBoxes([...boxes, newBox]);
      setColor('');
      setSize('');
      console.log("Nuevo cuadro agregado:", newBox); // Mensaje para verificar el cuadro
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Color:
            <input 
              type="text" 
              value={color} 
              onChange={(e) => setColor(e.target.value)} 
              placeholder="Ingrese un color" 
            />
          </label>
        </div>
        <div>
          <label>
            Tamaño (px):
            <input 
              type="number" 
              value={size} 
              onChange={(e) => setSize(e.target.value)} 
              placeholder="Ingrese el tamaño en px" 
            />
          </label>
        </div>
        <button type="submit">Agregar Cuadro</button>
      </form>

      <div style={styles.container}>
        {boxes.map((box, index) => (
          <div 
            key={index} 
            style={{ 
              ...styles.box, 
              backgroundColor: box.color, 
              width: `${box.size}px`, 
              height: `${box.size}px` 
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxGenerator;
