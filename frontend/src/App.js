import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import SimplePortfolio from "./components/SimplePortfolio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SimplePortfolio />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;