import { useState } from "react"
import Square from "./Square"

const Face = () => {

    const faceArray = [{
        position: 1,
        color: 'bg-red-500',
        axis: false,
    },
    {
        position: 2,
        color: 'bg-green-500',
        axis: 'x',
        name: 'U'
    },
    {
        position: 3,
        color: 'bg-blue-500',
        axis: 'x',
        name: 'F'
    },
    {
        position: 4,
        color: 'bg-yellow-500',
        axis: 'y',
        name: 'L'
    },
    {
        position: 5,
        color: 'bg-purple-500',
        axis: 'y',
        name: 'M'
    },
    {
        position: 6,
        color: 'bg-pink-500',
        axis: 'y',
        name: 'R'
    },
    {
        position: 7,
        color: 'bg-red-500',
        axis: false
    },
    {
        position: 8,
        color: 'bg-green-500',
        axis: false
    },
    {
        position: 9,
        color: 'bg-blue-500',
        axis: 'x',
        name: 'D'
    },
    {
        position: 10,
        color: 'bg-yellow-500',
        axis: 'x',
        name: 'B'
    }
]

    const [inputResult, setInputResult] = useState('')

  return (
    <div>
        <div className='grid grid-cols-3 gap-4'>
            {faceArray.map((i)=>(
                <Square key={i.position} position={i.position} color={i.color} axis={i.axis} name={i.name} setInputResult={setInputResult}/>
            ))}
        </div>
        <p>Movimiento: {inputResult}</p>
    </div>
  )
}
export default Face