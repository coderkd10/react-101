import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      </div>
    );
  }
}

export default App;
