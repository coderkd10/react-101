import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { HelloMessage, HelloFunctional } from './HelloMessage';
import Timer from './Timer';
import TodoApp from './TodoApp';
import MarkdownEditor from './MarkdownEditor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React 101</h1>
        </header>
        <p className="App-intro">
          Examples from <a href='https://reactjs.org/#exmaples'>react's landing page</a>
        </p>

        {/* This is a comment */}
        <HelloMessage name='kedia' />
        <HelloFunctional name='Abhishek' />

        {/* Timer */}
        <Timer speed={2} />
        <hr/>

        {/* Todo App */}
        <TodoApp />
        <hr/>

        {/*Md editor with emoji support*/}
        <MarkdownEditor />
      </div>
    );
  }
}

export default App;
