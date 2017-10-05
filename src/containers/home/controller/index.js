import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getCardioExercisesAsync,
  getWeightExercisesAsync,
} from '../../../actions/exercises.js';
import Select from '../../../components/select/index.js';

export class Controller extends Component {
  static propTypes = {
    exercises: PropTypes.array,
    getCardioExercisesAsync: PropTypes.func.isRequired,
    getWeightExercisesAsync: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      cardio: [],
      weight: [],
    };
  }

  componentWillMount() {
    this.props.getCardioExercisesAsync();
    this.props.getWeightExercisesAsync();
  }

  render() {
    return (
      <Col
        md={6}
        xsOffset={3}
      >
        <Col xs={6}>
          <Select options={this.props.exercises.cardio} />
          <button>Add</button>
        </Col>
        <Col xs={6}>
          <Select options={this.props.exercises.weight} />
          <button>Add</button>
        </Col>
      </Col>
    );
  }
}

const mapStateToProps = (state) => ({
  exercises: state.exercises,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getCardioExercisesAsync,
    getWeightExercisesAsync,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
