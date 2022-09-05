import "./App.css";
import React from "react";
import Button from "./components/Button";
import { useTheme } from '@mui/material'
import { ThemeProvider } from "@mui/material";
import {theme} from'./components/styles/Styles'

// import TextFieldMui from "./components/TextFieldMui";
// import AccordinMui from "./components/AccordinMui";
// import SelectMui from "./components/SelectMui";
// import RatingMui from "./components/RatingMui";
// import RadioMui from "./components/RadioMui";
// import CheckboxMui from "./components/CheckboxMui";
// import ButtonMui from "./components/ButtonMui";
// import AutocompleteMui from "./components/AutocompleteMui";

function App() {
const Theme = useTheme()
console.log(Theme)
  return (
    <ThemeProvider theme={theme}>
    
      <Button />
      {/* <ButtonMui/> */}
      {/* <CheckboxMui/> */}
      {/* <RadioMui/> */}
      {/* <RatingMui/> */}
      {/* <SelectMui/> */}
      {/* <TextFieldMui/> */}
      {/* <AccordinMui/> */}
    
    </ThemeProvider>
  );
}

export default App;
