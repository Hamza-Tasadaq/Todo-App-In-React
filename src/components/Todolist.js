import React, { Component } from 'react';

export default class Todolist extends Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.todoData.map((value, index) => { return (<li key={index} className="list-group-item " style={{ marginBottom: '5px' }}>{value}  <i onClick={()=>{this.props.removeTask(index)}} style={{ marginLeft: '5px' }} className="float-right fas fa-trash" /> </li>) })}
            </ul>
        )
    }
}
