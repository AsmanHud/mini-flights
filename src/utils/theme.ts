import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#202025",
      paper: "#36373a",
    },
    text: {
      primary: "#e8ebec",
    },
    primary: {
      main: "#6d63fe",
    },
  },
});

export default theme;
