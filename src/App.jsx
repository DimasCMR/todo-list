import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import TaskComponent from './components/Task/Task'
import AddButtonComponent from './components/AddButton/AddButton'
import InputComponent from './components/InputComponent/Input'
import FilterIcon from './components/FilterIcon/FilterIcon'

function App() {
  const [stateInput, setStateInput] = useState("")
  const [Tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('Tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(Tasks))
  }, [Tasks])

  // Удалён дублирующий useEffect

  const saveData = () => {
    if (stateInput.trim() === "") return; // не добавляем пустые задачи
    
    const newTask = {
      id: crypto.randomUUID(), // надёжная генерация ID
      task_data: stateInput
    }
    setTasks([...Tasks, newTask]);
  }

  const handleDeleteButton = (id) => {
    setTasks(Tasks.filter(task => task.id !== id));
  }

  const handleEditTask = (id, newText) => {
    if (newText.trim() === "") return;
    setTasks(Tasks.map(task => 
      task.id === id ? { ...task, task_data: newText } : task
    ));
  }

  const handleClick = () => {
    saveData();
    setStateInput("");
  }

  return (
    <>
      <h1 className='main_h1'>All your tasks</h1>
      <div className='container_for_header'>
        <h3 className='main_h3'>Tasks:</h3>
        <FilterIcon />
      </div>
      <ul className='task-list'>
        {Tasks.map((task) => (
          <li key={task.id}>
            <TaskComponent 
              task={task} 
              handleDeleteButton={() => handleDeleteButton(task.id)}
              onEditTask={handleEditTask}
            />
          </li>
        ))}
      </ul>

      <InputComponent setStateInput={setStateInput} stateInput={stateInput} />
      <AddButtonComponent handleClick={handleClick} isDisabled={stateInput.trim() === ""} />
    </>
  )
}

export default App