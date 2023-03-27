import * as React from "react";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(0, 0, 0, 0.6)",
    },
  },
});
