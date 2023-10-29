import React, { useState } from 'react'
import classes from './stepsForm.module.css'


export  function StepsForm({ callbackSubmit, form, setForm }) {
    // const [form, setForm] = useState({
    //     date:'',
    //     dist:''
    // })

const handleSubmit = (e)=> {
    e.preventDefault()
    if(!e.target.date.value.match(/\d{2}\.\d{2}\.\d{4}/)){
        setForm(prev => ({...prev, form:{
            date:'',
            dist:''
        }}))
        console.log('Некоректный формат даты')
        return
    }
    const data = new FormData(e.target);

    const value = Object.fromEntries(data.entries());
    callbackSubmit(value)
    setForm(prev => ({...prev, form:{
        date:'',
        dist:''
    }}))

}

const handleChange = ({ target }) => {
    const {name, value} = target
    setForm(prev => {
        const result = {...prev}
        result.form[name] = value
        return result
    })
}



  return (
    <div className={classes['form-container']}>
        <form onSubmit = {handleSubmit}>
            <label>
                <span> Дата(dd.mm.yyyy)</span>
                <input onChange = { handleChange} value={form.date} name='date'/>
            </label>
            <label>
                <span>Пройдено км</span>
                <input onChange = { handleChange} value={form.dist} name='dist'/>
            </label>
            <button>ok</button>
        </form>
    </div>
  )
}
