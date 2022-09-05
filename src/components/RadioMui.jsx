import React, { useState } from 'react'
import { FormControl } from '@mui/material'
import {FormControlLabel} from '@mui/material'
import {FormLabel} from '@mui/material'
import {Radio} from '@mui/material'
import {RadioGroup} from '@mui/material'


const RadioMui = () => {

const[value,setValue] = useState('')
const [state,setState] = useState('sample1')
console.log(state)
console.log(value,"empty")
const handleChange = (e) => {
    setValue(e.target.value)
}

const standAlone = (e) => {
    setState(e.target.value)
}
  return (
    <div>

    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
     <div>
     <Radio
       
       onChange={standAlone}
       value="a"
       name="radio-buttons"
       inputProps={{ 'aria-label': 'A' }}
       />
     <Radio
       checked={state === 'sample2'}
       onChange={standAlone}
       value="b"
       name="radio-buttons"
       inputProps={{ 'aria-label': 'B' }}
       />
   </div>
       </div>
  )
}

export default RadioMui