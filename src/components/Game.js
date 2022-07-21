import { useState } from 'react'
import Board from './Board'

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  function handleClick() {
    
  }

  function jumpTo() {

  }

  function renderMoves() {

  }
  return (
    <Board onClick={handleClick}/>
  )
}
