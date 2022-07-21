import React from 'react'
import styles from './Panel.module.css'

export default function Panel({winner, xIsNext, setBoard}) {
  return (
    <div className={styles.Panel}>
      <p>{
        winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`
      }</p>
      <button onClick={() => setBoard(Array(9).fill(null))}>
        New Game
      </button>
    </div>
  )
}
