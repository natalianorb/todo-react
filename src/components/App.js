import React, { Component } from 'react';
import Day from './Day'
import tasks from '../tasks'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { tasks };
    this.addTask = this.addTask.bind(this);
  }
  
  addTask () {
    const newState = tasks.push({
      id: Date.now(),
      dueDate: '',
      startTime: '10:00',
      endTime: '10:15',
      title: 'title',
      description: ''
    });

    this.setState({
      tasks: newState
    }); 
  }

  render () {
    return (
      <div>
        <Day tasks={ tasks }/>
        <button onClick={ this.addTask }>+</button>
      </div>
    )
  }
}


export default App