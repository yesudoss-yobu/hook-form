import React from 'react'
import { FormControl } from '@mui/material'
import {InputLabel} from '@mui/material'
import {Select} from '@mui/material'
import {MenuItem} from '@mui/material'
import { useState } from 'react'

const SelectMui = () => {

    const[age,setAge] = useState('')

    const handleChange = (e) => {
        setAge(e.target.value)
    }

  return (
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
  )
}

export default SelectMui