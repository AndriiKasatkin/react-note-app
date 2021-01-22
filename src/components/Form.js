import React, { useState, useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'

export const Form = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)

  const submitHandler = (event) => {
    event.preventDefault()

    if (value.trim()) {
      alert.show('Note has been created', 'success')
      setValue('')
    } else {
      alert.show('Enter the text')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Tape note text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  )
}
