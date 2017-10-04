import React, { Component } from 'react';
import Controller from './controller/index.js';
import List from './list/index.js';
import './index.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="lander">
          <h1>FIIT Trainer</h1>
          <p>A programmable HIIT Trainer</p>
          <Controller />
          <List />
        </div>
      </div>
    );
  }
}
