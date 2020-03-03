import React from "react";

import { createBrowserHistory } from "history";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";
import { Router } from "react-router-dom";

const browserHistory = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
