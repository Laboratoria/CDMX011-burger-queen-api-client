import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import SignUp from './components/SingUp'
import LogIn from './components/LogIn'

function App() {
  return (
    <Router>
      <div>
       <Routes>
        <Route path='/' element={<LogIn/>} />
        <Route path='register' element={<SignUp/>} />
       </Routes>
       </div>
    </Router>
  );
}

export default App;
