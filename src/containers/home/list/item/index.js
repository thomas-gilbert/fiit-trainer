import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

export default class List extends Component {
  render() {
    return (
      <ListGroupItem className="list__item">
        <p>List Item</p>
      </ListGroupItem>
    );
  }
}
