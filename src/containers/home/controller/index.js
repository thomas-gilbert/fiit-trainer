import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getCardioExercisesAsync,
  getWeightExercisesAsync,
} from '../../../actions/exercises.js';
import ExerciseSelect from './exercise-select/index.js';

export class Controller extends Component {
  static propTypes = {
    exercises: PropTypes.object,
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
      <Row>
        <Col xs={6}>
          <ExerciseSelect
            options={this.props.exercises.cardio}
            defaultValue="Select exercise"
          />
        </Col>
        <Col xs={6}>
          <ExerciseSelect
            options={this.props.exercises.weight}
            defaultValue="Select exercise"
          />
        </Col>
      </Row>
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
