import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  removeExerciseFromList,
} from '../../actions/list.js';
import Controller from './controller/index.js';
import List from '../../components/list/index.js';
import './index.css';

export class Home extends Component {
  static propTypes = {
    list: PropTypes.object.isRequired,
    removeExerciseFromList: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Row>
        <Col
          md={12}
        >
          <div className="lander">
            <PageHeader>FIIT Trainer <small>A programmable HIIT Trainer</small></PageHeader>
            <Controller />
            <List
              list={this.props.list}
              removeAction={this.props.removeExerciseFromList}
            />
          </div>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    removeExerciseFromList,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
