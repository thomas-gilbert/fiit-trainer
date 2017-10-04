import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ListItem from './item/index.js'

export default class List extends Component {
  render() {
    return (
      <Col md={12}>
        <ul className="list">
          <ListItem />
        </ul>
      </Col>
    );
  }
}
