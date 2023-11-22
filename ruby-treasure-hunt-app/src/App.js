import React, { useState } from 'react'
import "./App.css"
import Header from './components/Header'
import Square from './components/Square'

const App = () => {
  // This state variable sets the board and updates it
  const [board, setBoard] = useState([
    "💎",
    "💎",
    "💎",
    "💎",
    "💎",
    "💎",
    "💎",
    "💎",
    "💎"
  ])

  return (
<>
    <Header />
    {/* created a div to contain the game board */}
    <div className="gameBoard">
      {/* iterate over the board and return the square component */}
      {board.map((value, index) => {
        return(
          <Square 
          value={value}
          key={index}
          />
        )
      })}
    </div>
</>
  )
}

export default App