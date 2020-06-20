import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Container from "./components/Container/Container";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8BCBC8",
      light: "#c5e5e3",
      dark: "#3C2E3D",
    },
    secondary: {
      main: "#FDAE84",
      light: "#ECC7C0",
    },
  },
  typography: {
    body1: {
      fontSize: 16,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container />
    </ThemeProvider>
  );
};

export default App;
