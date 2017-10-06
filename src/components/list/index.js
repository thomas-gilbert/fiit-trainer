import React from 'react';
import PropTypes from 'prop-types';
import { Clearfix, Col, ListGroup } from 'react-bootstrap';
import ListItem from './item/index.js';

const List = ({ list }) =>
  <Clearfix>
    <Col md={12}>
      <ListGroup className="list">
        {
          list.items.map((item, index) =>
            <ListItem
              key={index}
              text={item}
            />
          )
        }
      </ListGroup>
    </Col>
  </Clearfix>;

List.propTypes = {
  list: PropTypes.object.isRequired,
};

export default List;
