import React, { Component } from 'react';
import Button from '../components/Button';

export default class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleButtonEvent} >
        <div className="form-group">
          <input onChange={this.props.handleChange} value={this.props.value} type="text" className="form-control" />
        </div>
        <Button  text='Add Task' />
      </form>
    )
  }
}