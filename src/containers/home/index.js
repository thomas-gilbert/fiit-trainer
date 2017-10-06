import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Controller from './controller/index.js';
import List from '../../components/list/index.js';
import './index.css';

export class Home extends Component {
  static propTypes = {
    list: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Row>
        <Col
          md={12}
        >
          <div className="lander">
            <h1>FIIT Trainer</h1>
            <p>A programmable HIIT Trainer</p>
            <Controller />
            <List
              list={this.props.list}
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

export default connect(mapStateToProps, null)(Home);
