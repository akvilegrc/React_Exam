import "./App.css";
import React from "react";
import { Route, Routes} from "react-router-dom";
import { Register } from "./views/Register/Regsiter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route />
        <Route />
      </Routes>
    </div>
  )
  
    
}

export default App;

