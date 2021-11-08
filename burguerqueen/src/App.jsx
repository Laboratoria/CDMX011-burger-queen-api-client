
import '../src/App.css';
import React from 'react';
import { BrowserRouter, 
Route, Routes } from 'react-router-dom';
import Login from './components/Login';




function App() {
  return (
    <BrowserRouter className="App">
  <Routes>
  <Route exact path='/' element={<Login />} />
   </Routes>
 
    </BrowserRouter>
  );
}

export default App;
