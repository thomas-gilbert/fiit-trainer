import React from 'react';
import PropTypes from 'prop-types';
import {
  ListGroupItem,
  Button,
  Glyphicon,
} from 'react-bootstrap';

const List = ({ removeAction, index, text }) => {
  function onClick() {
    removeAction(index);
  }

  return (
    <ListGroupItem className="list__item">
      <p>{text}</p>
      <Button
        onClick={onClick}
      >
        <Glyphicon glyph="remove" />
      </Button>
    </ListGroupItem>
  );
};

List.propTypes = {
  removeAction: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default List;
