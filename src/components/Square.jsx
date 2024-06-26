import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

function Square() {
  const [direccion, setDireccion] = useState('');
  const startPos = useRef({ x: 0, y: 0 });

  const determinarDireccion = (event, info) => {
    const threshold = 50; // Umbral para considerar un movimiento significativo
    const xDiff = info.offset.x - startPos.current.x;
    const yDiff = info.offset.y - startPos.current.y;


    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      // Movimiento horizontal
      if (Math.abs(xDiff) > threshold) {
        setDireccion(xDiff > 0 ? 'derecha' : 'izquierda');
      }
    } else {
      // Movimiento vertical
      if (Math.abs(yDiff) > threshold) {
        setDireccion(yDiff > 0 ? 'abajo' : 'arriba');
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={1}
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: '#646cff',
          borderRadius: '10px',
          cursor: 'grab'
        }}
        onDragStart={(event, info) => {
          startPos.current = info.offset;
          console.log(info)
        }}
        onDrag={determinarDireccion}
      >
      </motion.div>
      <p>Dirección: {direccion}</p>
    </div>
  );
}

export default Square;