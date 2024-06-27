import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

function Square({position, color, axis, name, setInputResult, inputResult, setArrayResult}) {
  const handleDirection = (event, info, axis) => {
    // console.log(info.offset.x, info.offset.y)
    
    const threshold = 30; // Umbral de detección de movimiento

    if (axis === 'x' && Math.abs(info.offset.x) > threshold) {
        const horizontalDirection = info.offset.x > 0 ? 'derecha' : 'izquierda';
        setInputResult(handleDirectionResult(name, horizontalDirection));
    }
    if (axis === 'y' && Math.abs(info.offset.y) > threshold) {
        // Aquí movimiento vertical hacia arriba es un offset negativo
        const verticalDirection = info.offset.y <  0 ? 'arriba' : 'abajo';
        setInputResult(handleDirectionResult(name, verticalDirection));
    }
  }

  const handleDirectionResult = (name, direction ) => {
        let result = ''
        switch (name) {
            case 'U':
                result = direction == 'derecha' ? "U'" : "U"
                break;
            case 'R':
                result = direction == 'arriba' ? "R" : "R'"
                break;
            case 'L':
                result = direction == 'arriba' ? "L'" : "L"
                break;
            case 'D':
                result = direction == 'derecha' ? "D" : "D'"
                break;
            case 'F':
                result = direction == 'derecha' ? "F" : "F'"
                break;
            case 'B':
                result = direction == 'derecha' ? "B'" : "B"
                break;
            case 'M':
                result = direction == 'arriba' ? "M'" : "M"
                break;
            default:
                result = '-'
                break;
        }

        return result
    }

  return (
      <motion.div className={`h-10 w-10 ${color} rounded-lg flex items-center justify-center ${position==10 ? 'col-start-2' : ''}`}
        drag={axis}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.35}
        onDrag={(event, info) => handleDirection(event, info, axis)}
        onDragEnd={(event, info) => {
            if(event.type === "pointercancel") return
            setArrayResult(prev => [...prev, inputResult])
        }}
      >
        {name}
      </motion.div>
  );
}

export default Square;