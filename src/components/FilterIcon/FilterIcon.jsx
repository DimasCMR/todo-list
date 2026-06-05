import React from 'react'
import css_classes from './FilterIcon.module.css'

const FilterIcon = () => {
  return (
    <div className={css_classes.filterIcon}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H20M7 12H17M10 18H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  )
}

export default FilterIcon