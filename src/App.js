// import React, { Component } from '../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Likes from './Likes';
import LikesChild from './LikesChild';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Likes thing="cheese" />
          <Likes thing="beer" />
          <Likes thing="foo" />
          <LikesChild title="Title One">
            <div>One is great!</div>
          </LikesChild>
        </div>
      </div>
    );
  }
}

export default App;
