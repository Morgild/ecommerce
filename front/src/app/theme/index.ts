import { createTheme } from "@mui/material";
import { number } from "yup";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#12A795",
      contrastText: "#fff",
    },
    secondary: {
      main: "#121316",
      light: "#3F4145",
      contrastText: "#fff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});
