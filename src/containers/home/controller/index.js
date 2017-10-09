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
      <div>
        <Row>
          <Col xsOffset={6} xs={6}>
            <h3>Weight Exercises</h3>
            <label>
              Workout Time
              <input type="number" value="20" placeholder="" />
              Minutes
            </label><br/>
            <label>
              Workout Interval
              <input type="number" value="40" placeholder="" />
              Seconds
            </label><br/>
            <label>
              Rest Interval
              <input type="number" value="20" placeholder="" />
              Seconds
            </label><br/>
            <button>START</button>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <h3>Cardio Exercises</h3>
            <ExerciseSelect
              options={this.props.exercises.cardio}
              defaultValue="Select exercise"
            />
          </Col>
          <Col xs={6}>
            <h3>Weight Exercises</h3>
            <ExerciseSelect
              options={this.props.exercises.weight}
              defaultValue="Select exercise"
            />
          </Col>
        </Row>
      </div>
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
