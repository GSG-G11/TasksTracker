import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  AddTodoForm, CardsContainer, Header, TasksFilter,
} from './components';
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
      selected: 'all',
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
      taskName: '',
      taskDescription: '',
      editIndex: -1,
    }));
  };

  handleChange = (e) => {
    if (!e.target) return;
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      todoListArr, editIndex, taskName, taskDescription,
    } = this.state;
    if (!(taskName || taskDescription)) return this.toggle();
    if (editIndex === -1) {
      todoListArr.push({
        id: uuidv4(),
        taskName,
        taskDescription,
        isDone: false,
      });
    } else {
      todoListArr[editIndex] = { ...todoListArr[editIndex], taskName, taskDescription };
    }
    return this.setState({
      modal: false,
      taskName: '',
      taskDescription: '',
      editIndex: -1,
      todoListArr,
    });
  };

  handleDelete = (todoId) => {
    const { todoListArr } = this.state;
    const filteredArr = todoListArr.filter(({ id }) => todoId !== id);
    this.setState({ todoListArr: filteredArr });
  };

  handleEdit = (todoId) => {
    const { todoListArr } = this.state;
    const editIndex = todoListArr.findIndex(({ id }) => id === todoId);
    const { taskName, taskDescription } = todoListArr[editIndex];
    this.setState({
      taskName, taskDescription, modal: true, editIndex,
    });
  };

  handleDone = (todoId) => {
    const { todoListArr } = this.state;
    const doneIndex = todoListArr.findIndex(({ id }) => id === todoId);
    todoListArr[doneIndex].isDone = !todoListArr[doneIndex].isDone;
    this.setState({
      todoListArr,
    });
  };

  render() {
    const {
      modal, taskName, taskDescription, todoListArr, selected,
    } = this.state;
    return (
      <>
        <Header toggle={this.toggle} />
        <TasksFilter handleChange={this.handleChange} selected={selected} />
        {
          todoListArr.length === 0 ? (
            <Alert color="light" className="alert">
              <h3>No Tasks Added!</h3>
            </Alert>
          ) : (
            <CardsContainer
              todoListArr={todoListArr.filter(({ isDone }) => (selected === 'all') || (selected === 'done' && isDone) || (selected === 'notdone' && !isDone))}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
              handleDone={this.handleDone}
            />
          )
        }

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
