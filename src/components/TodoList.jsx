import React from 'react'
import TodoCard from './TodoCard';

export default function TodoList(props) {
  const { todos, handleDeleteToDo} = props;
  
    return (
    <ul className='main'>
        {todos.map((todo, toDoIndex) => {
            return (
                <TodoCard {...props} key={toDoIndex} toDoIndex={toDoIndex}>
                    <p>{todo}</p>
                </TodoCard>
            )
        })}
    </ul>
  )
}
