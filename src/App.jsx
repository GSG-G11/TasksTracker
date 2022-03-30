/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoCard from './components/TodoCard';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      taskName: '',
      taskDescription: '',
      editIndex: -1,
      todoListArr: [],
    };
  }

  toggle = () => {
    this.setState((prevState) => ({ modal: !prevState.modal }));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      todoListArr, editIndex, taskName, taskDescription,
    } = this.state;
    if (editIndex === -1) {
      todoListArr.push({
        id: uuidv4(),
        taskName,
        taskDescription,
        isDone: false,
      });
    }
    this.setState({
      modal: false,
      taskName: '',
      taskDescription: '',
      editIndex: -1,
      todoListArr,
    });
  };

  render() {
    const { modal, taskName, taskDescription } = this.state;
    return (
      <>
        <div className="header text-center">
          <div>
            <h1>Tasks Tracker</h1>
            <button className="btn btn-primary" type="button" onClick={this.toggle}>Add Task</button>
          </div>
        </div>
        <hr />
        <TodoCard
          id={0}
          taskName={taskName}
          taskDescription={taskDescription}
          isDone={false}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          index={0}
        />
        <AddTodoForm
          modal={modal}
          toggle={this.toggle}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          taskName={taskName}
          taskDescription={taskDescription}
        />
      </>
    );
  }
}

export default App;
