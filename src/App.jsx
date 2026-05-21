import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import TaskComponent from './components/Task/Task'
import AddButtonComponent from './components/AddButton/AddButton'
import InputComponent from './components/InputComponent/Input'
import FilterIcon from './components/FilterIcon/FilterIcon'

function App() {

  
  //States
  const [stateInput, setStateInput] = useState("");
  
  const[Tasks,setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('Tasks');
    // Parse the data if it exists, otherwise use a default value
    const initialValue = savedTasks ? JSON.parse(savedTasks) : []; 
    return initialValue;
  });

  useEffect(()=>{
    localStorage.setItem("Tasks", JSON.stringify(Tasks))
  },[Tasks])
 
  useEffect(() => {
    // Load previously viewed items from Local Storage
    const storedItems = JSON.parse(localStorage.getItem('Tasks')) || []; //Это приводит к лишнему рендеру и потенциальной рассинхронизации.
    // Второй useEffect нужно удалить – начальное состояние уже загружено правильно.
    
    setTasks(storedItems);
}, []);
  
  //handler functions
  const saveData = ()=>{
    
    let tasks_len = Tasks.length;
    let current_id=1;
    if(tasks_len>0){
      current_id = tasks_len+1;
    }
    // Этот способ ненадёжен при удалении задач. Пример:
    // Есть задачи с id: 1, 2, 3.
    // Удаляем задачу с id: 2. Длина массива становится 2.
    // Новая задача получит id: 3, но id: 3 уже существует в массиве.
    // Лучшие варианты:
    // Date.now() (просто, но возможны коллизии при быстром добавлении)
    // crypto.randomUUID() (современный стандарт)
    // Счётчик на основе максимального существующего id
    
    let currentTask = {
      id:current_id,
      task_data: stateInput
    }
    setTasks([...Tasks, currentTask]);

  }//end saveData function


  const handleDeleteButton = (id)=>{
    let storedItems = JSON.parse(localStorage.getItem('Tasks')) || [];
    storedItems = storedItems.filter((item)=>{
      return item.id!=id;
    });
    setTasks(storedItems);
    console.log(storedItems);
    console.log(`delete function runs on id:${id}`)
  }//end deleteData function

  const handleEditButton = (id)=>{

  }

  const handleClick = ()=>{
    saveData()
    setStateInput("")
  }
  
  return (
    <>
    <h1 className='main_h1'>All your tasks</h1>
    <div className='container_for_header'>
      <h3 className='main_h3'>Tasks:</h3>
      <FilterIcon/>
    </div>
      <ul>
        
        <li>
        {Tasks.map((task)=>{
          return <TaskComponent key={task.id} task={task} handleDeleteButton={() => handleDeleteButton(task.id)}/>
        })}
        </li>
        
      </ul>
      
    
    
    <InputComponent setStateInput = {setStateInput} stateInput={stateInput} />
    <AddButtonComponent handleClick = {handleClick}/>
  
    </>
  )
}

export default App
