import React from 'react'
import { useState } from 'react';
import css_classes from './Input.module.css';
const Input = ({setStateInput, stateInput}) => {
  
  const handleChange = (e)=>{
      setStateInput(e.target.value);
  }


  return (
    <input className={`${css_classes.main_input}`} type = {'text'} placeholder={"input task"} onChange={handleChange} value = {stateInput} />
)}

export default Input