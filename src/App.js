import React, { useState } from 'react';
import BoxForm from './componentes/Cajasform';
import BoxDisplay from './componentes/Cajasdisplay';
import BoxGenerator from './/componentes/generador';

const App = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (box) => {
    setBoxes([...boxes, box]);
  };

  return (
    <div>
      <h1>Generador de Cuadros</h1>
      <BoxGenerator />
      <BoxForm addBox={addBox} />
      <BoxDisplay boxes={boxes} />
    </div>
  );
};

export default App;
