import React, { Component } from 'react';

export default class HeaderandFooter extends Component {
    render() {
        return (
            <div className="nav justify-content-center">
                <h1>{this.props.title}<span>.</span></h1>
            </div>
        )
    }
}
