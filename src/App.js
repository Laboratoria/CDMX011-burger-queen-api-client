import React, {Component} from 'react';
import './App.css';
import tasks from './sample/tasks.json';
import Tareas from './components/Tasks.js'

class App extends Component {
  state = {
    tasks: tasks
  }
  render(){
    return (
      <Tareas tasks={this.state.tasks}/>
    )
  }
}

export default App;
