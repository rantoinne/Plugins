import React, { Component } from 'react';
import suite from './suite.svg';
import './App.css';
import Timer from './timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={suite} className="App-suite" alt="suite" />
          <h1 className="App-heading">Welcome to Timer App built in ReactJS</h1>
        </header>
        <p>
        <Timer start={Date.now()}/>
        </p>
      </div>
    );
  }
}

export default App;
