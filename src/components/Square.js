import React from "react"

export default function Square({ value, onClick }) {
  return <button onClick={onClick}>{value}</button>
}
