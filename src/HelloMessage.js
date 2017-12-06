import React, { Component } from 'react';

export class HelloMessage extends Component {
    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}

export const HelloFunctional = props => {
    return (
        <div>
            Bonjour {props.name}
        </div>
    );
}
