import React from 'react'
import css_classes from './AddButton.module.css'
const AddButton = ({handleClick}) => {
  
  return (
    <button onClick={handleClick} className={`${css_classes.addButton}`}>
      Add task
    </button>
  )
}

export default AddButton