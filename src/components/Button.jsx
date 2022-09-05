import React from "react";
import { Button, styled } from "@mui/material";

const StyBtn = styled(Button)`
  background-color: darkblue;
  color: white;
  padding: 0%;
  font-size: 10px;
`;

const App = () => {
  return (
    <div>
      <Button variant="text" color="primary">Text</Button>
      <StyBtn variant="contained">Contained</StyBtn>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
};

export default App;
