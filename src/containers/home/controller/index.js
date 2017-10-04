import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';  
import { 
  getCardioExercisesAsync,
  getWeightExercisesAsync
} from '../../../actions/exercises.js'
import Select from '../../../components/select/index.js'

export class Controller extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cardio: [],
      weight: [],
    };
  }

  componentDidMount() { 
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
          <Select options={this.state.cardio} />
          <button>Add</button>
        </Col>
        <Col xs={6}>
          <Select options={this.state.cardio} />
          <button>Add</button>
        </Col>
      </Col>
    );
  }
}

const mapStateToProps = (state) => ({  
  exercises: state.exercises,
})

const mapDispatchToProps = (dispatch) => {  
  return bindActionCreators({
    getCardioExercisesAsync,
    getWeightExercisesAsync
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Controller);
