import React, { Component } from 'react';
import Select from '../../../components/select/index.js'

export default class Controller extends Component {
  render() {
    return (
      <div>
        <ul className="controller">
          <li>
            <Select />
            <button>Add</button>
          </li>
          <li>
            <Select />
            <button>Add</button>
          </li>
        </ul>
      </div>
    );
  }
}
