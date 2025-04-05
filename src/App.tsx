import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Navbar";
import SideNav from "./Components/SideNavBar";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Components/Theme";
import Home from "./Pages/Home";
import { Routing } from "./Components/Routing";
function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <NavBar />
        <Routing />
      </ThemeProvider>
    </div>
  );
}

export default App;
