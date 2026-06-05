import { useState } from 'react'
import EditButtonComponent from '../EditButton/EditButton'
import DeleteButtonComponent from '../DeleteButton/DeleteButton'
import css_classes from './Task.module.css'

const Task = ({ task, handleDeleteButton, onEditTask }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(task.task_data)

  const handleEditConfirm = () => {
    if (editText.trim() !== "") {
      onEditTask(task.id, editText)
    }
    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEditConfirm()
    }
    if (e.key === 'Escape') {
      setIsEditing(false)
      setEditText(task.task_data)
    }
  }

  return (
    <div className={`${css_classes.task}`}>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEditConfirm}
          onKeyDown={handleKeyDown}
          autoFocus
          className={css_classes.editInput}
        />
      ) : (
        <span className={css_classes.taskText}>{task.task_data}</span>
      )}
      <div className={css_classes.buttons}>
        <EditButtonComponent onClick={() => setIsEditing(true)} />
        <DeleteButtonComponent handleDeleteButton={handleDeleteButton} />
      </div>
    </div>
  )
}

export default Task