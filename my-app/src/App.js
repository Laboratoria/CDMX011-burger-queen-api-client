
//import React, {Component} from 'react';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Menu from "./Components/menu/menu";
import LogIn from "./Components/Login";
import { PrivateRoute } from "./PrivateRoute";
import "./Form.scss"

export function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route exact path="/menu" element={
            <PrivateRoute>
              <Menu/>
            </PrivateRoute>
          } />                   
        </Routes>
      </Router>
    </div>
  );
}

export default App;

