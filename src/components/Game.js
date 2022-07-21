import { useState } from 'react'
import Board from './Board'
import Panel from './Panel'
import calculateWinner from '../helpers'

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculateWinner(board)

  function handleClick(i) {
    const boardCopy = [...board]
    if(winner || boardCopy[i] !== null) {
      return
    }
    boardCopy[i] = xIsNext ? 'X' : 'O'
    setBoard(boardCopy)
    setXIsNext(!xIsNext)
  }

  function jumpTo() {

  }

  function renderMoves() {

  }
  return (
    <>
      <Board squares={board} onClick={handleClick}/>
      <Panel winner={winner} xIsNext={xIsNext} setBoard={setBoard} />
    </>
  )
}
