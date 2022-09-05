import { createTheme } from "@mui/material";
// import { colors } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(255,0,0)",
      //   main: colors.orange[500],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
