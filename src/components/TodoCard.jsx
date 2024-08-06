import React from 'react'

export default function TodoCard(props) {
    const {children, handleDeleteToDo, todoIndex, handleEditToDos } = props;
  return (
    <li className="todoItem">
        {children}
      <div className='actionsContainer'>
      </div>
      <button onClick={() => {
        handleEditToDos(index)
      }}>
        <i className="fa-regular fa-pen-to-square"></i>
      </button>
      <button onClick={() => {
            handleDeleteToDo(todoIndex)
        }}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </li>
  );
}
