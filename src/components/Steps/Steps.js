import React, { useState } from 'react'
import classes from './steps.module.css'
import { StepsForm } from '../StepsForm'
import { StepsList } from '../StepsList'
import moment from 'moment'


export  function Steps() {
    const initialState = {
        list:[],
        form:{
            date: '',
            dist: ''
        }
    }
    const [steps, setSteps] = useState(initialState)

    const formCallback = (newStep)=>{
        let result = [...steps.list]
            
            const currentDate = result.find(item => item.date === newStep.date)
            if(currentDate){
                currentDate.dist = Number(currentDate.dist) + Number(newStep.dist)
            } else {
                result = [...result, newStep]
            }
            result.sort((a,b) => {
                const  dateA = moment(a.date, "DD/MM/YYYY").toDate()
                const  dateB = moment(b.date, "DD/MM/YYYY").toDate()
                return dateA - dateB
            })
        setSteps(prev => ({...prev, list: result}))
    }

    const delCallback = (date) => {
        setSteps(prev => {
            const resultList = [...prev.list].filter(item => item.date !== date)
            return {...prev, list: resultList}
        })
    }

    const editCallback = (date,dist) => {
        setSteps(prev => {
            const resultForm = {
                date,
                dist
            }
            return {...prev, form: resultForm}
        })
    }

  return (
    <div className={classes.container}>
        <StepsForm callbackSubmit = { formCallback } form = {steps.form} setForm={setSteps}/>
        <StepsList list={ steps.list } onDel={ delCallback } onEdit={editCallback}/>
    </div>
  )
}
