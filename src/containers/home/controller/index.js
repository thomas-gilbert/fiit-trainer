import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Select from '../../../components/select/index.js'

export default class Controller extends Component {
  render() {
    return (
      <Col
        md={6}
        xsOffset={3}
      >
        <Col xs={6}>
          <Select />
          <button>Add</button>
        </Col>
        <Col xs={6}>
          <Select />
          <button>Add</button>
        </Col>
      </Col>
    );
  }
}
