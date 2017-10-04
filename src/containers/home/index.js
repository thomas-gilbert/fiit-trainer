import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Controller from './controller/index.js';
import List from './list/index.js';
import './index.css';

export default class Home extends Component {
  render() {
    return (
      <Col
        md={12}
      >
        <div className="lander">
          <h1>FIIT Trainer</h1>
          <p>A programmable HIIT Trainer</p>
          <Controller />
          <List />
        </div>
      </Col>
    );
  }
}
