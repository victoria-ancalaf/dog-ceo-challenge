import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
   palette: {
      primary: {
         main: "#46D2CE",
      },
      secondary: {
         main: "#fff176",
      },
      error: {
         main: red.A400,
      },
      background: {
         paper: "#eceff1",
      },
   },
});

export default theme;
