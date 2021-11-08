
import '../src/App.css';
import React from 'react';
import { BrowserRouter, 
Route, Switch } from 'react-router-dom';
import Login from './components/Login';



function App() {
  return (
    <BrowserRouter className="App">
  <Switch>
  <Route exact path='/' component={() => <Login />} />
   </Switch>
 
    </BrowserRouter>
  );
}

export default App;
