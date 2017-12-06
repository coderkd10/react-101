import React, { Component } from 'react';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { counter : 0 };
    }

    tick() {
        this.setState(prevState => ({
            counter : prevState.counter + 1
        }))        
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.tick();
        }, 1000/this.props.speed);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                {this.state.counter}
            </div>
        );
    }
}
