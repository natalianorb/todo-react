import React, { Component } from 'react';
import Task from './Task'

class Day extends Component  {
  render () {
    const { tasks } = this.props;
    const tasksElems = tasks.map(task => {
      return (
        <li key={ task.id } >
          <Task task={ task }/>
        </li>
      ) 
    });
  
    return (
      <div>
        <div> 20 окт </div>
        <ul>
          { tasksElems }          
        </ul>
      </div>
    )
  }
}

export default Day