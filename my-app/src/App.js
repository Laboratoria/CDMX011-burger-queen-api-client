import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Home from "./Components/Home";
import LogIn from "./Components/Login";
import "./Form.scss"



export function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route exact path="home" element={<Home />} />         
          {/* <Route exact path="form" element={<Form />} /> */}
        </Routes>
        <div className="list">
          {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="page1">Page 1</Link></li>
            <li><Link to="page2">Page 2</Link></li>
            <li><Link to="page3">Page 3</Link></li>
            <li><Link to="form">FORM</Link></li> 
          </ul> */}
        </div>
      </Router>
    </div>
  );
}

export default App;

