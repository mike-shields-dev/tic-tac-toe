import React from "react"
import styles from "./Square.module.css"

export default function Square({ value, onClick }) {
  return <button className={styles.Square} onClick={onClick}>{value}</button>
}
