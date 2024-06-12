import React from 'react';

const BoxDisplay = ({ boxes }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {boxes.map((box, index) => (
        <div
          key={index}
          style={{
            backgroundColor: box.color,
            width: `${box.size}px`,
            height: `${box.size}px`,
            margin: '10px',
          }}
        ></div>
      ))}
    </div>
  );
};

export default BoxDisplay;
