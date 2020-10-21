import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderandFooter from './components/Header&Footer';
import Headings from './components/Headings';
import Todolist from './components/Todolist';
import Button from './components/Button';
import Form from './components/Form'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ' ',
      myTodos: []
    };
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }
  addNewTask = (e) => {
    e.preventDefault();
    if (this.state.value === ' ') {
    }
    else {
      this.state.myTodos.push(this.state.value);
      // this.setState({
      //   myTodos: this.state.myTodos,
      //   value: ' ',
      // })



      this.setState({
        myTodos: this.state.myTodos,
        value: ""
      }, () => {
        window.localStorage.setItem('savedList', JSON.stringify(this.state.myTodos));
      });
    }
  }

  deleteAll = () => {
    this.state.myTodos.splice(0, this.state.myTodos.length)
    this.setState({
      myTodos: this.state.myTodos
    }, () => {
      window.localStorage.setItem('savedList', JSON.stringify(this.state.myTodos));
    });
  }

  removeTask = (index) => {
    this.state.myTodos.splice(index, 1)
    this.setState({
      myTodos: this.state.myTodos
    }, () => {
      window.localStorage.setItem('savedList', JSON.stringify(this.state.myTodos));
    });
  }


  componentDidMount() {
    const list = window.localStorage.getItem('savedList');
    const parsedList = JSON.parse(list);
    this.setState({
      myTodos: parsedList,
    })
  }

  render() {
    return (
      <div>
        <HeaderandFooter title='Todo App' />
        <div className="container">
          <div className="row ">
            <div className="col-12 ">
              <Headings text='Add Task' />
              <Form
                handleChange={this.handleChange}
                value={this.state.value}
                handleButtonEvent={this.addNewTask}
              />
              <br />
              <Headings text='Your Tasks' />
              <Todolist removeTask={this.removeTask} todoData={this.state.myTodos} />
              <Button handleButtonEvent={this.deleteAll} text='Delete All' />
            </div>
          </div>
        </div>
        <br />
        <HeaderandFooter title='By Hamza Tasadaq' />
      </div>
    )
  }
}


