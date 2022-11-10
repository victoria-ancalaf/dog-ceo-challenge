import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
         <CssBaseline />
         <App />
      </ThemeProvider>
   </React.StrictMode>
);
