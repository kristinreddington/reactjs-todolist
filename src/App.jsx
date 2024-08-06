import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [todos, setToDos] = useState(['Work out/Stretch', 
    'Make celery juice',
    'Clean aparmtnet',
    'Code', 
    'Study'
  ]);
  const [toDoValue, setToDoValue] = useState('');

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: 
      newList
     }));
  }

  function handleAddToDos(newToDo) {
    const newToDoList = [...todos, newToDo];
    persistData(newToDoList);
    setToDos(newToDoList);
  }

  function handleEditToDos(index) {
    const valueToBeEdited = todos[index];
    setToDoValue(valueToBeEdited);
    handleDeleteToDo(index);
  }

  function handleDeleteToDo(index) {
    const newToDoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newToDoList);
    setToDos(newToDoList);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localToDos = localStorage.getItem('todos');
    if (!localToDos) {
      return;
    }
    localToDos = JSON.parse(localToDos).todos
    setToDos(localToDos);

  }, []);

  return (
    <>
      <TodoInput toDoValue={toDoValue} setToDoValue={setToDoValue} handleAddToDos={handleAddToDos} />
      <TodoList handleDeleteToDo={handleDeleteToDo} handleEditToDos={handleEditToDos} todos={todos} />
    </>
  )
}

export default App
