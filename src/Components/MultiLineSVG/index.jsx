import React from 'react';

const MultiLineSVG = () => {
  // Array de pontos (x, y)
  const points = [
    { x: 50, y: 120 },
    { x: 150, y: 20 },
    { x: 250, y: 30 },
    { x: 350, y: 50 }
  ];

  return (
    <svg width="400" height="400">
      {/* Mapear pontos e desenhar linhas */}
      {points.slice(0, -1).map((point, index) => (
        <line 
          key={index}
          x1={point.x}
          y1={point.y}
          x2={points[index + 1].x}
          y2={points[index + 1].y}
          stroke="black"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
};

export default MultiLineSVG;
