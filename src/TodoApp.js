import React, { Component } from 'react';
import './spin.css';

export default class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items : [],
            text : '',
            rotation : {
                isRotating : false,
                time : 20
            }
        }
        window.t = this;
    }

    render() {
        return (
            <div>
                <h2>Todo App</h2>
                <TodoList 
                    items={this.state.items}
                    rotation={this.state.rotation} 
                    handleTimeChange={this.handleRotationTimeChange.bind(this)}
                    handleRotationToggle={this.handleRotationToggle.bind(this)}
                />
                <form onSubmit={this.handleSubmit.bind(this)} >
                    <div>Input : {this.state.text}</div>
                    <input 
                        onChange={this.handleChange.bind(this)}
                        value={this.state.text}
                    />
                    <button>Add #{this.state.items.length + 1}</button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text : e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0)
            return;
        const newItem = {
            text : this.state.text,
            id : Date.now()
        }
        this.setState(prevState => ({
            items : prevState.items.concat(newItem),
            text : ''
        }));
    }

    handleRotationTimeChange(e) {
        const t = parseInt(e.target.value, 10);
        if (isNaN(t)) {
            console.log("Not an Int : " + e.target.value);
            return;
        }
        this.setState(prevState =>
            ({ ...prevState, rotation : { ...prevState.rotation, time : t } })
        )
    }

    handleRotationToggle() {
        this.setState(prevState => 
            ({ 
                ...prevState, 
                rotation : { 
                    ...prevState.rotation, 
                    isRotating : ! prevState.rotation.isRotating
                } 
            })
        )
    }
}

// Props : List of items that are to be rendered in a list
const TodoList = props => {
    let style = {
        margin : '0 auto 20px auto',
        display : 'inline-block'
    };
    if (props.rotation.isRotating) {
        style.animation = `spin-animation infinite ${props.rotation.time}s linear`;
    }

    return (
        <div>
            <ol style={style}>
                {props.items.map(item => 
                    <li key={item.id}>{item.text}</li>
                )}
            </ol>
            {props.items.length !== 0 ? (
                <div>
                    <input
                        value={props.rotation.time}
                        onChange={props.handleTimeChange}
                    />
                    <button onClick={props.handleRotationToggle}>
                        {props.rotation.isRotating ? 'Stop Rotation!' : 'Start Rotation!'}
                    </button>
                </div>
            ) : ''}
        </div>
    );
}
