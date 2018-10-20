import React, { Component } from 'react';

class Task extends Component {
  render () {
    const { task } = this.props;
  
    return (
      <div className="task">
        <h2>{ task.dueDate }</h2>
        <div>
          <span>{ task.startTime }</span>
          <span>{ task.title }</span>
        </div>
      </div>
    )
  }
}

export default Task