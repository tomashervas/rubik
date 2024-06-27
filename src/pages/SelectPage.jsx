import GamePage from "./GamePage"
import { movements } from '../assets/movements'

const SelectPage = () => {

    const result = movements.OLL[0]

  return (
    <div>
        <GamePage result={result} />
    </div>
  )
}
export default SelectPage