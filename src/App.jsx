
// import './App.css'

import { Board } from "./Components/Board/Board"
import { History } from "./Components/History/History"

function App() {

  return (
    <>
      <h1 className='text-3xl font-bold underline text-center'>Tic Tac Toe</h1>
      <Board/>
      <History/>
    </>
  )
}

export default App
