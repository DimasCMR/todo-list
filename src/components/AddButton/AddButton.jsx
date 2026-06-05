import React from 'react'
import css_classes from './AddButton.module.css'

const AddButton = ({ handleClick, isDisabled }) => {
  return (
    <button 
      onClick={handleClick} 
      className={`${css_classes.addButton}`}
      disabled={isDisabled}
    >
      Add task
    </button>
  )
}

export default AddButton