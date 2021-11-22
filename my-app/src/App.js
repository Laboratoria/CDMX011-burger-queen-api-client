import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Page1 from"./Components/Home" 
import Form from"./Components/Form"  
import "./Form.scss"



export function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="page1" element={<Page1 />} />         
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

