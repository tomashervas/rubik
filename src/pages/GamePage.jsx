import { useEffect, useState } from "react"
import Face from "../components/Face"
import { FiDelete } from "react-icons/fi";

const GamePage = ({result}) => {

  const [arrayResult, setArrayResult] = useState([])
  const [inputResult, setInputResult] = useState('_')

  useEffect(() => {
    if(arrayResult.length === result.movements.length) {
      if(arrayResult.join('') === result.movements.join('')) {
        console.log('Correcto')
      } else {
        console.log('Incorrecto')
      }
    }
  }, [arrayResult])


  return (
    <div className="flex flex-col px-4 py-8 justify-between h-svh">
        <h1 className="text-center text-3xl font-bold">{result.name}</h1>
        <div className="space-y-4">
          <p className="text-center text-2xl"> {result.movements.join(' ')}</p>
          <div className="flex justify-center items-center gap-4">
            <p className="text-center text-2xl"> {arrayResult.join(' ')}</p>
            { arrayResult.length > 0 &&
              <FiDelete className="text-center text-2xl cursor-pointer" onClick={() => setArrayResult(prev=>prev.slice(0, -1))} />
            }
          </div>
        </div>
        <p className="text-center p-8 text-7xl">{ inputResult }</p>
        <Face setInputResult={setInputResult} inputResult={inputResult} setArrayResult={setArrayResult}/>
    </div>
  )
}
export default GamePage