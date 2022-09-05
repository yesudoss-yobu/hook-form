import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Switch } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { Typography } from "@mui/material";

const CustomButton = styled(Button)`
// margin:0%;
background-color: red;
color:  yellow;
padding:0%;
line-height:1;
.MuiButton{
  color:blue;
}
&:hover {
  // background-color: yellow;
  background-color: ${(props) => (props.sec ? "blue" : "yellow")};
  
 `;

const PadButton = styled(Button)`
  background-color: darkblue;
  color: white;
  padding: "0px";
`;
const ButtonMui = () => {
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <div>
      <Typography variant="h6"> MUI</Typography>
      <Stack spacing={5} direction="row">
        <Button variant="contained" disabled>
          button
        </Button>
        <CustomButton variant="outlined">primary</CustomButton>
        <CustomButton variant="outlined" sec={1}>
          Secondary
        </CustomButton>
        <PadButton variant="contained">Check</PadButton>
        <Button variant="contained">UnCheck</Button>
        {/* <MyButton variant="text" color="secondary">
          secondary
        </MyButton> */}
        <Button variant="contained" startIcon={<PhotoCamera />} color="success">
          success
        </Button>
        <Button
          variant="contained"
          color="error"
          disableElevation
          href="https://www.google.com"
        >
          error
        </Button>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
      </Stack>

      <FormControlLabel
        control={
          <Switch
            checked={loading}
            onChange={() => setLoading(!loading)}
            name="loading"
            color="primary"
          />
        }
        label="loading"
      />

      <LoadingButton
        size="small"
        onClick={handleClick}
        loading={loading}
        variant="contained"
      >
        disabled
      </LoadingButton>
    </div>
  );
};

export default ButtonMui;
