import React from 'react'
import classes from './stepsItem.module.css'

export  function StepsItem({step,onDel,onEdit}) {
  const handleDeleteClick = ({target})=>{
    console.log(target.dataset.date)
    onDel(target.dataset.date)
  }

  const handleEditClick = ({target})=>{
    onDel(target.dataset.date)
    onEdit(target.dataset.date, target.dataset.dist)
  }




  return (
    <div className={classes['step-container']}>
        <div className={classes['field']}>{step.date}</div>
        <div className={classes['field']}>{step.dist}</div>
      <div>
        <button 
        className={classes['button']}
        onClick={handleDeleteClick}
        data-date={step.date}
        > delete </button>
        <button onClick={handleEditClick}
        data-date={step.date}
        data-dist={step.dist}
        > edit </button>
      </div>
    </div>
  )
}
