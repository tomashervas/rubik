import { useState } from "react"
import Square from "./Square"
import  { faceArray } from "../assets/faceInputArray"

const Face = ({setInputResult, inputResult, setArrayResult}) => {

  return (
    <div>
        <div className='grid grid-cols-[repeat(3,40px)] gap-4 justify-center'>
            {faceArray.map((i)=>(
                <Square key={i.position} position={i.position} color={i.color} axis={i.axis} name={i.name} setInputResult={setInputResult} inputResult={inputResult} setArrayResult={setArrayResult}/>
            ))}
        </div>
    </div>
  )
}
export default Face