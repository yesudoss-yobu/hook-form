import React, { useState } from "react";
import { TextField } from "@mui/material";

const TextFieldMui = () => {
    const [value,setValue] = useState('')
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value)
    if (e.target.value === "") {
      setError(true);
    } else {
      setError(false);
    }
  };
  const handleBlur = () => {
    console.log(value,'empty')
if(value === ''){
    console.log(value,'empty')
    setError(false)
}
  }
  return (
    <div>
<label htmlFor="outlined-error-helper-text"></label>
    <TextField
      required
      error={error}
      id="outlined-error-helper-text"
      label=""
      onChange={handleChange}
      onBlur={handleBlur}
      defaultValue=""
      helperText={error ? "please enter correct value" : "Enter your name"}
      />
      </div>
  );
};

export default TextFieldMui;
