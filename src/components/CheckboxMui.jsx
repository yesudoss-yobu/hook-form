import React from 'react'
import { Checkbox } from '@mui/material'
import { useState } from 'react'

const CheckboxMui = () => {

    const[value,setValue]= useState(false)

    const handleChange = () =>{
        setValue(!value)
    }
  return (
    <Checkbox
      checked={value}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  )
}

export default CheckboxMui