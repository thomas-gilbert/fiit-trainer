import React, { Component } from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import ListItem from './item/index.js'

export default class List extends Component {
  render() {
    return (
      <Col md={12}>
        <ListGroup className="list">
          <ListItem />
        </ListGroup>
      </Col>
    );
  }
}
