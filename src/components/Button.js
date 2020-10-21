import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
        <button  onClick={this.props.handleButtonEvent} type="submit" className="btn btn-lg btn-block">{this.props.text}</button>
        )
    }
}