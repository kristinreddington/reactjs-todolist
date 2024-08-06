import React, { useState } from 'react'

export default function TodoInput(props) {
    const {handleAddToDos, toDoValue, setToDoValue} = props
  return (
    <header>
        <input value={toDoValue} onChange={(e) => {
            setToDoValue(e.target.value)
        }} className="font-face-luxurious" placeholder='Enter todo...' />
        <button onClick={() => {
            handleAddToDos(toDoValue)
            setToDoValue('')
        }} className="font-face-luxurious">Add</button>
    </header>
  )
}
