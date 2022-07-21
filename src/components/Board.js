import React from "react"
import styles from "./Board.module.css"
import Square from "./Square"

export default function Board({ squares, onClick }) {
  return (
    <div className={styles.Board}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  )
}
