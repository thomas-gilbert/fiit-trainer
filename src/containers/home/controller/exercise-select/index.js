import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import {
  addExerciseToList,
} from '../../../../actions/list.js';
import 'react-select/dist/react-select.css';

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

  handleChange({ value }) {
    this.setState({
      value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.value !== this.props.defaultValue) {
      this.props.addExerciseToList(this.state.value);
    }

    this.setState({
      value: this.props.defaultValue,
    });
  }

  render() {
    const optionsArray = [this.props.defaultValue, ...this.props.options].map((value) => ({
      value,
      label: value,
    }));

    return (
      <form onSubmit={this.handleSubmit}>
        <Select
          onChange={this.handleChange}
          value={this.state.value}
          options={optionsArray}
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    addExerciseToList,
  }, dispatch);

export default connect(null, mapDispatchToProps)(ExerciseSelect);
