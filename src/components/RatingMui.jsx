import React, { useState } from 'react'
import { Typography } from '@mui/material'
import {Rating} from '@mui/material'

const RatingMui = () => {
const[value,setValue] = useState(1)
console.log(value)

  return (
    <div>

    <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        />
        </div>
  )
}

export default RatingMui