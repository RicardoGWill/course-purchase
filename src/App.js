import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    var courses = [
      { name: 'Complete iOS 10 dev course: ', dollar:'$', price: 159 },
      { name: 'Complete front end dev course: ', dollar:'$', price: 199 },
      { name: 'Complete Android dev course: ', dollar:'$', price: 149 },
      { name: 'Complete back end dev course: ', dollar:'$', price: 249 }
    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Course Sales Page!</h2>
        </div>
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
