import React, { Component } from 'react'

export default class Headings extends Component {
    render() {
        return (
            <h2>{this.props.text}<span>.</span></h2>
        )
    }
}
