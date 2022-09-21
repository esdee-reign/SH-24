import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);
    this.onDeleteTask = this.onDeleteTask.bind(this)

    this.state = {
      task: { 
        text: '',
        id: 1
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id
      }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: this.state.task.id+1,
      },
    });
  };

  onDeleteTask = (vals) => {
    this.setState({
      tasks: vals
    })
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            type="text"
            id="taskInput"
            value={task.text}
          />
          <button type="submit">
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} onDeleteTask={this.onDeleteTask} />
      </div>
    );
  }
}

export default App;