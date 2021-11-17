import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import SignUp from './components/SingUp'
import LogIn from './pages/LogIn/LogIn'
import Menu from "./pages/menu/Menu";

function App() {
  return (
    <Router>
      <div>
       <Routes>
        <Route path='/' element={<LogIn/>} />
        <Route path='register' element={<SignUp/>} />
        <Route path='menu' element={<Menu/>} />
       </Routes>
       </div>
    </Router>
  );
}

export default App;
