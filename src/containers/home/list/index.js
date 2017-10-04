import React, { Component } from 'react';
import ListItem from './item/index.js'

export default class List extends Component {
  render() {
    return (
      <ul className="list">
        <ListItem />
      </ul>
    );
  }
}
