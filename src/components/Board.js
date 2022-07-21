import React from 'react'
import Square from './Square'

export default function Board({squares, onClick}) {
  return (
    <div>
      <Square value='1' onClick={() => onClick("dummy value")} />
      <Square value='1' onClick={() => onClick("dummy value")} />
      <Square value='1' onClick={() => onClick("dummy value")} />
      <Square value='1' onClick={() => onClick("dummy value")} />
      <Square value='1' onClick={() => onClick("dummy value")} />
      <Square value='1' onClick={() => onClick("dummy value")} />
      <Square value='1' onClick={() => onClick("dummy value")} />
      <Square value='1' onClick={() => onClick("dummy value")} />
      <Square value='1' onClick={() => onClick("dummy value")} />
    </div>
  )
}
