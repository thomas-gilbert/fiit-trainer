import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addExerciseToList,
  removeExerciseToList,
} from '../../../../actions/list.js';

export class ExerciseSelect extends Component {
  static propTypes = {
    options: PropTypes.array,
    defaultValue: PropTypes.string.isRequired,
    addExerciseToList: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addExerciseToList(this.state.value);
    this.setState({
      value: this.props.defaultValue,
    });
  }

  render() {
    const optionsArray = [this.props.defaultValue, ...this.props.options];

    return (
      <form onSubmit={this.handleSubmit}>
        <select
          onChange={this.handleChange}
          value={this.state.value}
        >
          {
            optionsArray.map((value, key) =>
              <option key={key}>{ value }</option>
            )
          }
        </select>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    addExerciseToList,
    removeExerciseToList,
  }, dispatch);

export default connect(null, mapDispatchToProps)(ExerciseSelect);
