import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ReactDOM } from "react";
import { Link, ReactLocation, Router } from "@tanstack/react-location";
import { routes } from "./routes";
const location = new ReactLocation();

function App() {
  return (
    <div className="App" >
      <Router location={location} routes={routes}></Router>
    </div>
  );
}

export default App;
