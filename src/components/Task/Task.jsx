import React from 'react'
import EditButtonComponent from '../EditButton/EditButton'
import DeleteButtonComponent from '../DeleteButton/DeleteButton'
import css_classes from './Task.module.css'
const Task = ({task, handleDeleteButton}) => {
  return (
    <div className={`${css_classes.task}`} key={task.id}>{task.task_data}
    <EditButtonComponent/>
    <DeleteButtonComponent handleDeleteButton={handleDeleteButton}/>
    </div>
  )
}

export default Task