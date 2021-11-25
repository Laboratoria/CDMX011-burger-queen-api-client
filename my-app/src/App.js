
import React, {Component} from 'react';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Home from "./Components/Home";
import LogIn from "./Components/Login";
import { PrivateRoute } from "./PrivateRoute";
import "./Form.scss"

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts:[]
//     }
//   };

//   componentDidMount(){
//     let url = "http://localhost:3001/posts"
//     fetch(url)
//     .then(resp => resp.json())
//     .then(data => {
//       let posts=data.map((post, index) => {
//         return (
//           <div key={index}>
//             <h3>{post.title}</h3>
//             <p>Tags: {post.tags}</p>
//            </div>
//         )
//       })
//       this.setState({posts:posts});
//     })
//   }
//   render() {
//     return (
//     <div className="App">
//       {this.state.posts}
//     </div>
//     );
//   }
// }

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

