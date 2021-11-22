import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Home from "./Components/Home";
import LogIn from "./Components/Login";
import { PrivateRoute } from "./PrivateRoute";
import "./Form.scss"



export function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route exact path="/home" element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          } />                   
        </Routes>
      </Router>
    </div>
  );
}

export default App;

