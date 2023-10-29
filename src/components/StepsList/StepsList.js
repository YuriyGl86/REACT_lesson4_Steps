import React from 'react'
import classes from './stepsList.module.css'
import { StepsItem } from '../StepsItem'


export  function StepsList({ list,onDel,onEdit }) {
  return (
    <div className={classes['list-container']}>
      {list.map(step => (
        <StepsItem step={step} key={step.date} onDel={ onDel } onEdit={ onEdit }/>
      ))}
    </div>
  )
}
