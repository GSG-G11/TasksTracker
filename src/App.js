/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import CardsContainer from './components/CardsContainer';
import Header from './components/Header';
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
    this.setState((prevState) => ({
      modal: !prevState.modal,
      taskName: '',
      taskDescription: '',
      editIndex: -1,
    }));
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

  render() {
    const {
      modal, taskName, taskDescription, todoListArr,
    } = this.state;
    return (
      <>
        <Header toggle={this.toggle} />
        {
          todoListArr.length === 0 ? (
            <Alert color="secondary" className="alert">
              No Tasks Added!
            </Alert>
          ) : (
            <CardsContainer
              todoListArr={todoListArr}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
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
