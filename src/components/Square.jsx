import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

function Square({position, color, axis,name, setInputResult}) {
  const [direccion, setDireccion] = useState('');
  const startPos = useRef({ x: 0, y: 0 });

  const determinarDireccion = (event, info) => {
    console.log(info.offset.x, info.offset.y)

    const threshold = 30; // Umbral para considerar un movimiento significativo
    const xDiff = info.offset.x - startPos.current.x;
    const yDiff = info.offset.y - startPos.current.y;

    // console.log(xDiff, yDiff)
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      // Movimiento horizontal
      if (Math.abs(xDiff) > threshold) {
        setInputResult(xDiff > 0 ? 'derecha' : 'izquierda');
      }
    } else {
      // Movimiento vertical
      if (Math.abs(yDiff) > threshold) {
        setInputResult(yDiff > 0 ? 'abajo' : 'arriba');
      }
    }
  };    

  return (
    <div className={`flex flex-col justify-center items-center ${position==10 && 'col-start-2'}`}>
      <motion.div className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center`}
        drag={axis}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.35}
        onDrag={determinarDireccion}
        // onDragEnd={() => setInputResult('reposo')}
      >
        {name}
      </motion.div>
      {/* <p>Dirección: {direccion}</p> */}
    </div>
  );
}

export default Square;